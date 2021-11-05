---
title: "Recording: By the Light of the Moon"
authors: ["Victor Fisher"]
explicit: false
type: Demo  
style: Rock
length: "1:22"
released:
link: https://victorslibrary.s3.amazonaws.com/music/demos/By+the+Light+of+the+Moon.mp3
---

<g-link to="/song/by-the-light-of-the-moon">Song Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Type: {{ $frontmatter.type }}  
Explicit: {{$frontmatter.explicit}}

### Audio

<audio controls controlsList="nodownload">
  <source :src="$frontmatter.link" type="audio/mpeg">
Your browser does not support the audio element.
</audio>