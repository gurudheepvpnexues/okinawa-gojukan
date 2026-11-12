/**
 * JSX layer.
 *
 * Every element built in the app passes through here, so the copy can be
 * swapped for its translation without touching a single page component.
 * Text becomes a translated + English pair; attributes (alt, placeholder, …)
 * get the translated wording only, because they must stay plain strings.
 */

import { Children, type ReactNode } from "react";
import {
	jsx as origJsx,
	jsxs as origJsxs,
	Fragment as origFragment,
} from "react/jsx-runtime";
import { Bi, getLang, t } from "./core";

/* Attributes that must stay plain strings. */
const TEXT_ATTRIBUTES = ["alt", "placeholder", "aria-label", "title"];

/* Elements whose children must not be wrapped. */
const RAW_TEXT_TAGS = ["title", "script", "style", "textarea"];

/* Elements whose text has to stay a plain string. */
const PLAIN_TEXT_TAGS = ["option"];

const translateChildren = (children: ReactNode): ReactNode => {
	if (children === null || children === undefined || typeof children === "boolean") {
		return children;
	}
	if (typeof children === "string") return Bi(children);
	if (typeof children === "number") return children;
	if (Array.isArray(children)) {
		return Children.map(children, (child) => translateChildren(child));
	}
	/* Elements were already translated when they were created. */
	return children;
};

const translatePlain = (children: ReactNode): ReactNode => {
	if (typeof children === "string") return t(children);
	if (Array.isArray(children)) {
		return Children.map(children, (child) => translatePlain(child));
	}
	return children;
};

const translateProps = (type: unknown, props: Record<string, unknown>) => {
	if (!props || getLang() === "en") return props;

	const out: Record<string, unknown> = { ...props };
	const tag = typeof type === "string" ? type : "";

	if (PLAIN_TEXT_TAGS.includes(tag) && out.children !== undefined) {
		out.children = translatePlain(out.children as ReactNode);
	} else if (!RAW_TEXT_TAGS.includes(tag) && out.children !== undefined) {
		out.children = translateChildren(out.children as ReactNode);
	}

	if (tag) {
		for (const attribute of TEXT_ATTRIBUTES) {
			const value = out[attribute];
			if (typeof value === "string") out[attribute] = t(value);
		}
	}

	return out;
};

export const Fragment = origFragment;

export function jsx(
	type: unknown,
	props: Record<string, unknown>,
	key?: unknown
) {
	return origJsx(type as never, translateProps(type, props), key as never);
}

export function jsxs(
	type: unknown,
	props: Record<string, unknown>,
	key?: unknown
) {
	return origJsxs(type as never, translateProps(type, props), key as never);
}
