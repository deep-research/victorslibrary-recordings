---
title: "Song: Suicidal Shaman"
band: Reenchantment
authors: ["Victor Fisher"]
explicit: true

description: |
  This is particularly nihilistic and rage fueled song of mine.

lyrics: |
  I am unemployed
  I am f\*\*\*ing sick
  I still live with my parents
  And I don’t give a s\*\*\*

  I am single and lonely
  And I hate this f\*\*\*ing world
  I never thought it would be like this
  And I just can’t forget that girl
  
  Yeah

  I like Eric and Dylan
  ’cause you have raped my f\*\*\*ing soul
  I’m a slave in this hopeless trap
  The lowest ones are in control

  I know I have no future
  This evil system has to die
  Your brightest turn to darkness
  For you must pay for every lie
---

<g-link to="/band/reenchantment">Band Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

### Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

### Recordings

1. <g-link to="/recording/suicidal-shaman">Suicidal Shaman</g-link>

### Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>