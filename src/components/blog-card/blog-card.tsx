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

export type BlogCardProps = {
  key?: any;
  style?: any;
  link: string;
  tags: string[];
  timestamp: string;
  title: string;
  briefing: string;
  color: string;
}

export function BlogCard(props: BlogCardProps) {
  return (
    <Container>
      <a style={{ textDecoration: 'none' }} href={props.link} target="_new">
        <TopColor style={{background: props.color}}/>
        <CardHeader>
        {props.tags.map((tag, i) => (
          <Tag key={i}> #{tag} </Tag>
        ))}

        <Timestamp>{props.timestamp}</Timestamp>
      </CardHeader>

      <Title> {props.title} </Title>
      <Briefing> {props.briefing} </Briefing>
    </a>
  </Container>
  )
}
