"use client";

import { format } from "date-fns";
import { use } from "react";

import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Activity } from "@/components/ui/contribution-graph";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/ui/contribution-graph";
import { SpinnerIcon } from "@phosphor-icons/react";
import { addQueryParams, cn } from "@/lib/utils";

export function GitHubContributionGraph({
  contributions,
}: {
  contributions: Promise<Activity[]>;
}) {
  const data = use(contributions);

  return (
    <TooltipProvider>
      <ContributionGraph
        className="mx-auto py-2"
        data={data}
        blockSize={11}
        blockMargin={3}
        blockRadius={0}
      >
        <ContributionGraphCalendar
          className="no-scrollbar px-2"
          title="GitHub Contributions"
        >
          {({ activity, dayIndex, weekIndex }) => (
            <TooltipRoot>
              <TooltipTrigger render={<g />}>
                <ContributionGraphBlock
                  activity={activity}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                  className={cn(
                    'data-[level="0"]:fill-[#0c0c0c]/5 dark:data-[level="0"]:fill-[#ffffff]/5',
                    'data-[level="1"]:fill-[#0c0c0c]/20 dark:data-[level="1"]:fill-[#ffffff]/20',
                    'data-[level="2"]:fill-[#0c0c0c]/50 dark:data-[level="2"]:fill-[#ffffff]/50',
                    'data-[level="3"]:fill-[#0c0c0c]/70 dark:data-[level="3"]:fill-[#ffffff]/70',
                    'data-[level="4"]:fill-[#0c0c0c]/90 dark:data-[level="4"]:fill-[#ffffff]/90',
                  )}
                />
              </TooltipTrigger>

              <TooltipContent>
                <p>
                  {activity.count} contribution{activity.count > 1 ? "s" : null}{" "}
                  on {format(new Date(activity.date), "dd.MM.yyyy")}
                </p>
              </TooltipContent>
            </TooltipRoot>
          )}
        </ContributionGraphCalendar>

        <ContributionGraphFooter className="px-2">
          <ContributionGraphTotalCount>
            {({ totalCount, year }) => (
              <div className="text-muted-foreground">
                {totalCount.toLocaleString("en")} contributions in {year} on{" "}
                <a
                  className="font-medium underline underline-offset-4"
                  href={addQueryParams("https://github.com/jamnxdev", {
                    utm_source: "jamn.dev",
                  })}
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </a>
                .
              </div>
            )}
          </ContributionGraphTotalCount>

          <ContributionGraphLegend />
        </ContributionGraphFooter>
      </ContributionGraph>
    </TooltipProvider>
  );
}

export function GitHubContributionFallback() {
  return (
    <div className="flex h-40.5 w-full items-center justify-center">
      <SpinnerIcon
        weight="duotone"
        className="animate-spin text-muted-foreground"
      />
    </div>
  );
}
