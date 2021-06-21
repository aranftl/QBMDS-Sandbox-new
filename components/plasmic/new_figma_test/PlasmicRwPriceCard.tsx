// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x8ztdr6NwjtFcF6gdhDwfr
// Component: 5NdmoXTPsJ9
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
import RwBanner from "../../RwBanner"; // plasmic-import: aBVp1OdCVQ/component
import RwButton from "../../RwButton"; // plasmic-import: ZtlGG_EjHW/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_new_figma_test.module.css"; // plasmic-import: x8ztdr6NwjtFcF6gdhDwfr/projectcss
import * as sty from "./PlasmicRwPriceCard.module.css"; // plasmic-import: 5NdmoXTPsJ9/css

import Rectangle712Icon from "./icons/PlasmicIcon__Rectangle712"; // plasmic-import: pNiNdGhV783/icon

export type PlasmicRwPriceCard__VariantMembers = {
  popular: "popular";
};

export type PlasmicRwPriceCard__VariantsArgs = {
  popular?: SingleBooleanChoiceArg<"popular">;
};

type VariantPropType = keyof PlasmicRwPriceCard__VariantsArgs;
export const PlasmicRwPriceCard__VariantProps = new Array<VariantPropType>(
  "popular"
);

export type PlasmicRwPriceCard__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  wholePrice?: React.ReactNode;
  duration?: React.ReactNode;
};

type ArgPropType = keyof PlasmicRwPriceCard__ArgsType;
export const PlasmicRwPriceCard__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "wholePrice",
  "duration"
);

export type PlasmicRwPriceCard__OverridesType = {
  root?: p.Flex<"div">;
  rwBanner?: p.Flex<typeof RwBanner>;
  productTitle?: p.Flex<"div">;
  subhead?: p.Flex<"div">;
  priceBlock?: p.Flex<"div">;
  pricing?: p.Flex<"div">;
  ctaBlock?: p.Flex<"div">;
  rwButton?: p.Flex<typeof RwButton>;
  tertiaryLink?: p.Flex<"a"> & Partial<LinkProps>;
  separator222?: p.Flex<"div">;
  featureBlock?: p.Flex<"div">;
  featureItem?: p.Flex<"div">;
  featureItem2?: p.Flex<"div">;
  featureItem22?: p.Flex<"div">;
  featureItem222?: p.Flex<"div">;
};

export interface DefaultRwPriceCardProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  wholePrice?: React.ReactNode;
  duration?: React.ReactNode;
  popular?: SingleBooleanChoiceArg<"popular">;
  className?: string;
}

function PlasmicRwPriceCard__RenderFunc(props: {
  variants: PlasmicRwPriceCard__VariantsArgs;
  args: PlasmicRwPriceCard__ArgsType;
  overrides: PlasmicRwPriceCard__OverridesType;
  dataFetches?: PlasmicRwPriceCard__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__popular]: hasVariant(variants, "popular", "popular")
      })}
    >
      {(hasVariant(variants, "popular", "popular") ? true : false) ? (
        <RwBanner
          data-plasmic-name={"rwBanner"}
          data-plasmic-override={overrides.rwBanner}
          className={classNames("__wab_instance", sty.rwBanner, {
            [sty.rwBanner__popular]: hasVariant(variants, "popular", "popular")
          })}
        />
      ) : null}

      <div
        data-plasmic-name={"productTitle"}
        data-plasmic-override={overrides.productTitle}
        className={classNames(defaultcss.all, sty.productTitle, {
          [sty.productTitle__popular]: hasVariant(
            variants,
            "popular",
            "popular"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Simple Start",
          value: args.children,
          className: classNames(sty.slotChildren)
        })}
      </div>

      <div
        data-plasmic-name={"subhead"}
        data-plasmic-override={overrides.subhead}
        className={classNames(defaultcss.all, sty.subhead)}
      >
        {p.renderPlasmicSlot({
          defaultContents:
            "Start off on the right foot with basic bookkeeping tools.",
          value: args.slot,
          className: classNames(sty.slotSlot)
        })}
      </div>

      <div
        data-plasmic-name={"priceBlock"}
        data-plasmic-override={overrides.priceBlock}
        className={classNames(defaultcss.all, sty.priceBlock)}
      >
        <div
          data-plasmic-name={"pricing"}
          data-plasmic-override={overrides.pricing}
          className={classNames(defaultcss.all, sty.pricing)}
        >
          <div className={classNames(defaultcss.all, sty.box__pPyH)}>
            {p.renderPlasmicSlot({
              defaultContents: "12 ",
              value: args.wholePrice,
              className: classNames(sty.slotWholePrice)
            })}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box___3Ih8O
            )}
          >
            {"$"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__xiVVy
            )}
          >
            {"/mo"}
          </div>
        </div>

        <div className={classNames(defaultcss.all, sty.box__aJgb)}>
          {p.renderPlasmicSlot({
            defaultContents: "For the first 3 months then $25 /mo*",
            value: args.duration,
            className: classNames(sty.slotDuration)
          })}
        </div>
      </div>

      <div
        data-plasmic-name={"ctaBlock"}
        data-plasmic-override={overrides.ctaBlock}
        className={classNames(defaultcss.all, sty.ctaBlock)}
      >
        <RwButton
          data-plasmic-name={"rwButton"}
          data-plasmic-override={overrides.rwButton}
          className={classNames("__wab_instance", sty.rwButton)}
        />

        <p.PlasmicLink
          data-plasmic-name={"tertiaryLink"}
          data-plasmic-override={overrides.tertiaryLink}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.tertiaryLink
          )}
          component={Link}
          platform={"nextjs"}
        >
          {"Or try it free for 30 days"}
        </p.PlasmicLink>
      </div>

      <div
        data-plasmic-name={"separator222"}
        data-plasmic-override={overrides.separator222}
        className={classNames(defaultcss.all, sty.separator222)}
      />

      <div
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.box__d0LrT
        )}
      >
        {"Feature highlights"}
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"featureBlock"}
        data-plasmic-override={overrides.featureBlock}
        hasGap={true}
        className={classNames(defaultcss.all, sty.featureBlock)}
      >
        <div
          data-plasmic-name={"featureItem"}
          data-plasmic-override={overrides.featureItem}
          className={classNames(defaultcss.all, sty.featureItem)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__n5ZV
            )}
          >
            {"Send invoices and accept Payments"}
          </div>

          <Rectangle712Icon
            className={classNames(defaultcss.all, sty.svg__blk4F)}
            role={"img"}
          />
        </div>

        <div
          data-plasmic-name={"featureItem2"}
          data-plasmic-override={overrides.featureItem2}
          className={classNames(defaultcss.all, sty.featureItem2)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__x5G92
            )}
          >
            {"Send invoices and accept Payments"}
          </div>

          <Rectangle712Icon
            className={classNames(defaultcss.all, sty.svg__a21Mh)}
            role={"img"}
          />
        </div>

        <div
          data-plasmic-name={"featureItem22"}
          data-plasmic-override={overrides.featureItem22}
          className={classNames(defaultcss.all, sty.featureItem22)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__pzaUi
            )}
          >
            {"Send invoices and accept Payments"}
          </div>

          <Rectangle712Icon
            className={classNames(defaultcss.all, sty.svg__d99Q)}
            role={"img"}
          />
        </div>

        <div
          data-plasmic-name={"featureItem222"}
          data-plasmic-override={overrides.featureItem222}
          className={classNames(defaultcss.all, sty.featureItem222)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__pLisO
            )}
          >
            {"Send invoices and accept Payments"}
          </div>

          <Rectangle712Icon
            className={classNames(defaultcss.all, sty.svg___6UXyj)}
            role={"img"}
          />
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "rwBanner",
    "productTitle",
    "subhead",
    "priceBlock",
    "pricing",
    "ctaBlock",
    "rwButton",
    "tertiaryLink",
    "separator222",
    "featureBlock",
    "featureItem",
    "featureItem2",
    "featureItem22",
    "featureItem222"
  ],
  rwBanner: ["rwBanner"],
  productTitle: ["productTitle"],
  subhead: ["subhead"],
  priceBlock: ["priceBlock", "pricing"],
  pricing: ["pricing"],
  ctaBlock: ["ctaBlock", "rwButton", "tertiaryLink"],
  rwButton: ["rwButton"],
  tertiaryLink: ["tertiaryLink"],
  separator222: ["separator222"],
  featureBlock: [
    "featureBlock",
    "featureItem",
    "featureItem2",
    "featureItem22",
    "featureItem222"
  ],
  featureItem: ["featureItem"],
  featureItem2: ["featureItem2"],
  featureItem22: ["featureItem22"],
  featureItem222: ["featureItem222"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  rwBanner: typeof RwBanner;
  productTitle: "div";
  subhead: "div";
  priceBlock: "div";
  pricing: "div";
  ctaBlock: "div";
  rwButton: typeof RwButton;
  tertiaryLink: "a";
  separator222: "div";
  featureBlock: "div";
  featureItem: "div";
  featureItem2: "div";
  featureItem22: "div";
  featureItem222: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRwPriceCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicRwPriceCard__VariantsArgs;
  args?: PlasmicRwPriceCard__ArgsType;
  overrides?: NodeOverridesType<T>;
  dataFetches?: PlasmicRwPriceCard__Fetches;
} & Omit<PlasmicRwPriceCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicRwPriceCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicRwPriceCard__ArgProps,
      internalVariantPropNames: PlasmicRwPriceCard__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicRwPriceCard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRwPriceCard";
  } else {
    func.displayName = `PlasmicRwPriceCard.${nodeName}`;
  }
  return func;
}

export const PlasmicRwPriceCard = Object.assign(
  // Top-level PlasmicRwPriceCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    rwBanner: makeNodeComponent("rwBanner"),
    productTitle: makeNodeComponent("productTitle"),
    subhead: makeNodeComponent("subhead"),
    priceBlock: makeNodeComponent("priceBlock"),
    pricing: makeNodeComponent("pricing"),
    ctaBlock: makeNodeComponent("ctaBlock"),
    rwButton: makeNodeComponent("rwButton"),
    tertiaryLink: makeNodeComponent("tertiaryLink"),
    separator222: makeNodeComponent("separator222"),
    featureBlock: makeNodeComponent("featureBlock"),
    featureItem: makeNodeComponent("featureItem"),
    featureItem2: makeNodeComponent("featureItem2"),
    featureItem22: makeNodeComponent("featureItem22"),
    featureItem222: makeNodeComponent("featureItem222"),

    // Metadata about props expected for PlasmicRwPriceCard
    internalVariantProps: PlasmicRwPriceCard__VariantProps,
    internalArgProps: PlasmicRwPriceCard__ArgProps
  }
);

export default PlasmicRwPriceCard;
/* prettier-ignore-end */
