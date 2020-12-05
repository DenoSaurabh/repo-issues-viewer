import { graphql } from "@octokit/graphql";
import urlModifier from "@utils/url-modifier";

const getRepoQuery = async (state) => {
  const { repoUrl, type, status } = state;

  const { owner, repoName } = urlModifier(repoUrl);

  const REPO_QUERY = `
  query repoQuery($owner: String!, $repo: String!) {
    repository(name: $repo, owner: $owner) {
      id
      issues(first: 10, orderBy: {field: UPDATED_AT, direction: DESC} ${
        status === "ALL" ? "" : "states: " + status
      }) {
          nodes {
            id
            body
            title
            updatedAt
            author {
              avatarUrl
              login
            }
          }
      }
    }
  }
`;

  try {
    const { repository } = await graphql(REPO_QUERY, {
      owner: owner,
      repo: repoName,
      status,
      headers: {
        authorization: `token ${process.env.TOKEN}`,
      },
    });

    return repository;
  } catch (err) {
    return {
      type: "error",
      message: "Incorrect URL",
    };
  }
};

export default getRepoQuery;
