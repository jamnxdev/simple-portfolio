import { Suspense } from "react";
import {
  GitHubContributionFallback,
  GitHubContributionGraph,
} from "../gh-contribution-graph";
import { getGitHubContributions } from "@/lib/github-contribution";

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
