import { Children, type ReactNode } from "react";
import {
	jsxDEV as origJsxDEV,
	Fragment as origFragment,
} from "react/jsx-dev-runtime";
import { Bi, getLang, t } from "./core";

const TEXT_ATTRIBUTES = ["alt", "placeholder", "aria-label", "title"];
const RAW_TEXT_TAGS = ["title", "script", "style", "textarea"];
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

export function jsxDEV(
	type: unknown,
	props: Record<string, unknown>,
	key?: unknown,
	isStaticChildren?: boolean,
	source?: unknown,
	self?: unknown
) {
	return origJsxDEV(
		type as never,
		translateProps(type, props),
		key as never,
		isStaticChildren as never,
		source as never,
		self as never
	);
}
