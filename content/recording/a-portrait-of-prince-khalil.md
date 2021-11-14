---
title: "Recording: A Portrait of Prince Khalil"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack  
style: Electronic
length: "1:42"
released: "2020-04-17"
link: https://victorslibrary.s3.amazonaws.com/music/A+Portrait+of+Prince+Khalil/A+Portrait+of+Prince+Khalil.mp3

---

<g-link to="/song/a-portrait-of-prince-khalil">Song Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Type: {{ $frontmatter.type }}  
Style: {{ $frontmatter.style }}  
Explicit: {{$frontmatter.explicit}}

### Audio

<audio controls controlsList="nodownload">
  <source :src="$frontmatter.link" type="audio/mpeg">
Your browser does not support the audio element.
</audio>