import { Suspense } from "react"

import { getGitHubContributions } from "@/lib/github-contribution"

import {
  GitHubContributionFallback,
  GitHubContributionGraph,
} from "../gh-contribution-graph"

export default function GithubSection() {
  const contributions = getGitHubContributions()

  return (
    <div className="border-b-2 border-dashed p-2">
      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph contributions={contributions} />
      </Suspense>
    </div>
  )
}
