## How to change .mp4/.vid to a .gif?

```
-ffmpeg -i demo_publisher.mp4 -vf "fps=20,scale=720:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=256[p];[s1][p]paletteuse=dither=sierra2_4a" output_@.gif
```