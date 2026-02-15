import { Suspense } from "react";

import { getGitHubContributions } from "@/lib/github-contribution";

import {
  GitHubContributionFallback,
  GitHubContributionGraph,
} from "../gh-contribution-graph";

export default function GithubSection() {
  const contributions = getGitHubContributions();

  return (
    <div className="border-dashed m-2 border">
      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph contributions={contributions} />
      </Suspense>
    </div>
  );
}
