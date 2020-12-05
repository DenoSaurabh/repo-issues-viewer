import { useEffect, useState } from "react";

import {
  Heading,
  Para,
  BoldText,
  Title,
  Caption,
  Span,
} from "@styles/typography";
import { Button } from "@styles/components/button";
import { Input } from "@styles/components/input";
import { IssueContainer } from "@styles/components/issue-container";
import { FlexContainer } from "@styles/components/flex";
import { Avatar, AvatarBox } from "@styles/components/avatar";

import repoQuery from "../graphql/repo-query";

export default function Home() {
  const [state, setState] = useState({
    repoUrl: "",
    type: "issues",
    status: "ALL",
  });

  const [data, setData] = useState(undefined);

  const onInputChange = (e) => {
    e.preventDefault();

    setState({ ...state, repoUrl: e.target.value });
  };

  const onBtnClick = (e) => {
    const { name } = e.target;

    setState({ ...state, status: name });
  };

  // Effect
  useEffect(async () => {
      const repository = await repoQuery(state);
      setData(repository);
  }, [state]);

  return (
    <div>
      <Heading>Github Issues</Heading>

      <Input
        name="repo-url"
        placeholder="Enter Repository Url"
        value={state.repoUrl}
        onChange={onInputChange}
      />

      <FlexContainer>
        <Button name="ALL" onClick={onBtnClick}>
          All
        </Button>
        <Button name="OPEN" onClick={onBtnClick}>
          Open
        </Button>
        <Button name="CLOSED" onClick={onBtnClick}>
          Closed
        </Button>
      </FlexContainer>

      <FlexContainer direction="column">
        {data && !data.type ? (
          data.issues.nodes.map((el, i) => {
            const { title, updatedAt, body } = el;
            const { avatarUrl, login } = el.author || {};

            // Elimnating Long Texts
            const isLongBody = body.length > 200;

            const modifiedBody = isLongBody
              ? `${body.split(0, 200)[0]} ....`
              : body;

            return (
              <IssueContainer key={i}>
                <Title>{title}</Title>
                <Para>{modifiedBody}</Para>

                <AvatarBox>
                  <Avatar src={avatarUrl} size="30" />
                  <BoldText>{login}</BoldText>
                  <Span>{new Date(updatedAt).toLocaleDateString()}</Span>
                </AvatarBox>
              </IssueContainer>
            );
          })
        ) : (
          <Caption>Enter Correct GitHub Url</Caption>
        )}
      </FlexContainer>
    </div>
  );
}
