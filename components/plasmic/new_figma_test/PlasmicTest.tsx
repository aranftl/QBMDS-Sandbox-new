// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x8ztdr6NwjtFcF6gdhDwfr
// Component: Rk1jRnXKDu
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
import * as sty from "./PlasmicTest.module.css"; // plasmic-import: Rk1jRnXKDu/css

import SeparatorIcon from "./icons/PlasmicIcon__Separator"; // plasmic-import: 3_Et6U0xfn5/icon
import Rectangle712Icon from "./icons/PlasmicIcon__Rectangle712"; // plasmic-import: pNiNdGhV783/icon
import Rectangle713Icon from "./icons/PlasmicIcon__Rectangle713"; // plasmic-import: 2fdrCWYF_HL/icon

export type PlasmicTest__VariantMembers = {};

export type PlasmicTest__VariantsArgs = {};
type VariantPropType = keyof PlasmicTest__VariantsArgs;
export const PlasmicTest__VariantProps = new Array<VariantPropType>();

export type PlasmicTest__ArgsType = {};
type ArgPropType = keyof PlasmicTest__ArgsType;
export const PlasmicTest__ArgProps = new Array<ArgPropType>();

export type PlasmicTest__OverridesType = {
  root?: p.Flex<"div">;
  group1224?: p.Flex<"div">;
  group959?: p.Flex<"div">;
  group875?: p.Flex<"div">;
  group369?: p.Flex<"div">;
  rectangle449?: p.Flex<"div">;
  group306?: p.Flex<"div">;
  group294?: p.Flex<"div">;
  img?: p.Flex<"img">;
  choosePlan?: p.Flex<"div">;
  group960?: p.Flex<"div">;
  group998?: p.Flex<"div">;
  group950?: p.Flex<"div">;
  _12?: p.Flex<"div">;
  frame1208?: p.Flex<"div">;
  group1204?: p.Flex<"div">;
  group1205?: p.Flex<"div">;
  group1206?: p.Flex<"div">;
  runProfitLossExpensesAndBalanceSheets?: p.Flex<"div">;
  group1207?: p.Flex<"div">;
};

export interface DefaultTestProps {
  className?: string;
}

function PlasmicTest__RenderFunc(props: {
  variants: PlasmicTest__VariantsArgs;
  args: PlasmicTest__ArgsType;
  overrides: PlasmicTest__OverridesType;
  dataFetches?: PlasmicTest__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"group1224"}
        data-plasmic-override={overrides.group1224}
        className={classNames(defaultcss.all, sty.group1224)}
      >
        <div
          data-plasmic-name={"group959"}
          data-plasmic-override={overrides.group959}
          className={classNames(defaultcss.all, sty.group959)}
        >
          <div
            data-plasmic-name={"group875"}
            data-plasmic-override={overrides.group875}
            className={classNames(defaultcss.all, sty.group875)}
          >
            <div
              data-plasmic-name={"group369"}
              data-plasmic-override={overrides.group369}
              className={classNames(defaultcss.all, sty.group369)}
            >
              <div
                data-plasmic-name={"rectangle449"}
                data-plasmic-override={overrides.rectangle449}
                className={classNames(defaultcss.all, sty.rectangle449)}
              />

              <SeparatorIcon
                className={classNames(defaultcss.all, sty.svg___7X2Xb)}
                role={"img"}
              />

              <div
                data-plasmic-name={"group306"}
                data-plasmic-override={overrides.group306}
                className={classNames(defaultcss.all, sty.group306)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__soGk
                  )}
                >
                  {"Or try it free for 30 days"}
                </div>

                <div
                  data-plasmic-name={"group294"}
                  data-plasmic-override={overrides.group294}
                  className={classNames(defaultcss.all, sty.group294)}
                >
                  <img
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(defaultcss.img, sty.img)}
                    height={52 as const}
                    role={"img"}
                    src={"/plasmic/new_figma_test/images/vector2.svg"}
                    width={160 as const}
                  />

                  <div
                    data-plasmic-name={"choosePlan"}
                    data-plasmic-override={overrides.choosePlan}
                    className={classNames(defaultcss.all, sty.choosePlan)}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__vPohd
                      )}
                    >
                      {"Choose plan"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__fSe6H
              )}
            >
              {"Feature highlights"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__jE9Pm
              )}
            >
              {"Start off on the right foot with basic bookkeeping tools."}
            </div>

            <div
              data-plasmic-name={"group960"}
              data-plasmic-override={overrides.group960}
              className={classNames(defaultcss.all, sty.group960)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__eiVkj
                )}
              >
                {"Simple Start"}
              </div>
            </div>
          </div>
        </div>

        <div
          data-plasmic-name={"group998"}
          data-plasmic-override={overrides.group998}
          className={classNames(defaultcss.all, sty.group998)}
        >
          <div
            data-plasmic-name={"group950"}
            data-plasmic-override={overrides.group950}
            className={classNames(defaultcss.all, sty.group950)}
          >
            <div
              data-plasmic-name={"_12"}
              data-plasmic-override={overrides._12}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty._12
              )}
            >
              {"12 "}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__x5Otd
              )}
            >
              {"$"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__cSfVh
              )}
            >
              {"/mo"}
            </div>
          </div>
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__cn8VX
          )}
        >
          {"For the first 3 months then $25 /mo*"}
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"frame1208"}
          data-plasmic-override={overrides.frame1208}
          hasGap={true}
          className={classNames(defaultcss.all, sty.frame1208)}
        >
          <div
            data-plasmic-name={"group1204"}
            data-plasmic-override={overrides.group1204}
            className={classNames(defaultcss.all, sty.group1204)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box___0ElBv
              )}
            >
              {"Send invoices and accept Payments"}
            </div>

            <Rectangle712Icon
              className={classNames(defaultcss.all, sty.svg__aOlWb)}
              role={"img"}
            />
          </div>

          <div
            data-plasmic-name={"group1205"}
            data-plasmic-override={overrides.group1205}
            className={classNames(defaultcss.all, sty.group1205)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box___6D8Ir
              )}
            >
              {"Track income and expenses"}
            </div>

            <Rectangle712Icon
              className={classNames(defaultcss.all, sty.svg__hzSeS)}
              role={"img"}
            />
          </div>

          <div
            data-plasmic-name={"group1206"}
            data-plasmic-override={overrides.group1206}
            className={classNames(defaultcss.all, sty.group1206)}
          >
            <Rectangle713Icon
              className={classNames(defaultcss.all, sty.svg__kl8U)}
              role={"img"}
            />

            <div
              data-plasmic-name={"runProfitLossExpensesAndBalanceSheets"}
              data-plasmic-override={
                overrides.runProfitLossExpensesAndBalanceSheets
              }
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.runProfitLossExpensesAndBalanceSheets
              )}
            >
              {"Run profit & loss, expenses, and balance sheets "}
            </div>
          </div>

          <div
            data-plasmic-name={"group1207"}
            data-plasmic-override={overrides.group1207}
            className={classNames(defaultcss.all, sty.group1207)}
          >
            <Rectangle712Icon
              className={classNames(defaultcss.all, sty.svg__tfFx5)}
              role={"img"}
            />

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__oXnFk
              )}
            >
              {"Maximize Tax deductions"}
            </div>
          </div>
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "group1224",
    "group959",
    "group875",
    "group369",
    "rectangle449",
    "group306",
    "group294",
    "img",
    "choosePlan",
    "group960",
    "group998",
    "group950",
    "_12",
    "frame1208",
    "group1204",
    "group1205",
    "group1206",
    "runProfitLossExpensesAndBalanceSheets",
    "group1207"
  ],
  group1224: [
    "group1224",
    "group959",
    "group875",
    "group369",
    "rectangle449",
    "group306",
    "group294",
    "img",
    "choosePlan",
    "group960",
    "group998",
    "group950",
    "_12",
    "frame1208",
    "group1204",
    "group1205",
    "group1206",
    "runProfitLossExpensesAndBalanceSheets",
    "group1207"
  ],
  group959: [
    "group959",
    "group875",
    "group369",
    "rectangle449",
    "group306",
    "group294",
    "img",
    "choosePlan",
    "group960"
  ],
  group875: [
    "group875",
    "group369",
    "rectangle449",
    "group306",
    "group294",
    "img",
    "choosePlan",
    "group960"
  ],
  group369: [
    "group369",
    "rectangle449",
    "group306",
    "group294",
    "img",
    "choosePlan"
  ],
  rectangle449: ["rectangle449"],
  group306: ["group306", "group294", "img", "choosePlan"],
  group294: ["group294", "img", "choosePlan"],
  img: ["img"],
  choosePlan: ["choosePlan"],
  group960: ["group960"],
  group998: ["group998", "group950", "_12"],
  group950: ["group950", "_12"],
  _12: ["_12"],
  frame1208: [
    "frame1208",
    "group1204",
    "group1205",
    "group1206",
    "runProfitLossExpensesAndBalanceSheets",
    "group1207"
  ],
  group1204: ["group1204"],
  group1205: ["group1205"],
  group1206: ["group1206", "runProfitLossExpensesAndBalanceSheets"],
  runProfitLossExpensesAndBalanceSheets: [
    "runProfitLossExpensesAndBalanceSheets"
  ],
  group1207: ["group1207"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  group1224: "div";
  group959: "div";
  group875: "div";
  group369: "div";
  rectangle449: "div";
  group306: "div";
  group294: "div";
  img: "img";
  choosePlan: "div";
  group960: "div";
  group998: "div";
  group950: "div";
  _12: "div";
  frame1208: "div";
  group1204: "div";
  group1205: "div";
  group1206: "div";
  runProfitLossExpensesAndBalanceSheets: "div";
  group1207: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTest__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicTest__VariantsArgs;
  args?: PlasmicTest__ArgsType;
  overrides?: NodeOverridesType<T>;
  dataFetches?: PlasmicTest__Fetches;
} & Omit<PlasmicTest__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicTest__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTest__ArgProps,
      internalVariantPropNames: PlasmicTest__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTest__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTest";
  } else {
    func.displayName = `PlasmicTest.${nodeName}`;
  }
  return func;
}

export const PlasmicTest = Object.assign(
  // Top-level PlasmicTest renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    group1224: makeNodeComponent("group1224"),
    group959: makeNodeComponent("group959"),
    group875: makeNodeComponent("group875"),
    group369: makeNodeComponent("group369"),
    rectangle449: makeNodeComponent("rectangle449"),
    group306: makeNodeComponent("group306"),
    group294: makeNodeComponent("group294"),
    img: makeNodeComponent("img"),
    choosePlan: makeNodeComponent("choosePlan"),
    group960: makeNodeComponent("group960"),
    group998: makeNodeComponent("group998"),
    group950: makeNodeComponent("group950"),
    _12: makeNodeComponent("_12"),
    frame1208: makeNodeComponent("frame1208"),
    group1204: makeNodeComponent("group1204"),
    group1205: makeNodeComponent("group1205"),
    group1206: makeNodeComponent("group1206"),
    runProfitLossExpensesAndBalanceSheets: makeNodeComponent(
      "runProfitLossExpensesAndBalanceSheets"
    ),
    group1207: makeNodeComponent("group1207"),

    // Metadata about props expected for PlasmicTest
    internalVariantProps: PlasmicTest__VariantProps,
    internalArgProps: PlasmicTest__ArgProps
  }
);

export default PlasmicTest;
/* prettier-ignore-end */
