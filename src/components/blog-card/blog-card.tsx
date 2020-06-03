import React from "react"

import {
  Tag,
  Timestamp,
  Container,
  CardHeader,
  Title,
  Briefing,
  TopColor,
} from './elements'

export interface BlogCardProps {
  key?: any;
  style?: any;
  tags: string[];
  timestamp: string;
  title: string;
  briefing: string;
  color: string;
}

export function BlogCard(props: BlogCardProps) {
  return (
    <Container>
      <TopColor style={{background: props.color}}/>
      <CardHeader>
      {props.tags.map((tag, i) => (
        <Tag key={i}> #{tag} </Tag>
      ))}

        <Timestamp>{props.timestamp}</Timestamp>
      </CardHeader>

      <Title> {props.title} </Title>
      <Briefing> {props.briefing} </Briefing>
    </Container>
  )
}
