// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x8ztdr6NwjtFcF6gdhDwfr
// Component: ZtlGG_EjHW
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_new_figma_test.module.css"; // plasmic-import: x8ztdr6NwjtFcF6gdhDwfr/projectcss
import * as sty from "./PlasmicRwButton.module.css"; // plasmic-import: ZtlGG_EjHW/css

export type PlasmicRwButton__VariantMembers = {
  medium: "medium";
  large: "large";
};

export type PlasmicRwButton__VariantsArgs = {
  medium?: SingleBooleanChoiceArg<"medium">;
  large?: SingleBooleanChoiceArg<"large">;
};

type VariantPropType = keyof PlasmicRwButton__VariantsArgs;
export const PlasmicRwButton__VariantProps = new Array<VariantPropType>(
  "medium",
  "large"
);

export type PlasmicRwButton__ArgsType = {};
type ArgPropType = keyof PlasmicRwButton__ArgsType;
export const PlasmicRwButton__ArgProps = new Array<ArgPropType>();

export type PlasmicRwButton__OverridesType = {
  root?: p.Flex<"div">;
  button?: p.Flex<"button">;
};

export interface DefaultRwButtonProps {
  medium?: SingleBooleanChoiceArg<"medium">;
  large?: SingleBooleanChoiceArg<"large">;
  className?: string;
}

function PlasmicRwButton__RenderFunc(props: {
  variants: PlasmicRwButton__VariantsArgs;
  args: PlasmicRwButton__ArgsType;
  overrides: PlasmicRwButton__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames(
          defaultcss.button,
          defaultcss.__wab_text,
          sty.button,
          {
            [sty.button__large]: hasVariant(variants, "large", "large"),
            [sty.button__medium]: hasVariant(variants, "medium", "medium")
          }
        )}
      >
        {"Lorem ipsum"}
      </button>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRwButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicRwButton__VariantsArgs;
  args?: PlasmicRwButton__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicRwButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicRwButton__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicRwButton__ArgProps,
      internalVariantPropNames: PlasmicRwButton__VariantProps
    });

    return PlasmicRwButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRwButton";
  } else {
    func.displayName = `PlasmicRwButton.${nodeName}`;
  }
  return func;
}

export const PlasmicRwButton = Object.assign(
  // Top-level PlasmicRwButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicRwButton
    internalVariantProps: PlasmicRwButton__VariantProps,
    internalArgProps: PlasmicRwButton__ArgProps
  }
);

export default PlasmicRwButton;
/* prettier-ignore-end */
