const urlModifier = (url) => {
  const repo = url.replace("https://github.com", "");

  const splittedText = repo.split("/");

  return {
      owner: splittedText[1],
      repoName: splittedText[2]
  }
};

export default urlModifier;
