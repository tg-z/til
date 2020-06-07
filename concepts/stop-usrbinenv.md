the problem with using #!/usr/bin/env in your scripts 
=====
- category: concepts
- tags: shell, cli
- created: 2020-06-06
---------------------
today i joined [rwxrob's](rwx.gg) twitch livestream and joined his discord server. i found his twitch over two weeks ago and he quickly became one of my favorite streamers in the science and technology twitch category. he never fails to impress me in his humility and attitude towards beginners. i like how opinionated he is and he makes it clear that he has no problem with changing his mind as he learns more. 
[comment](https://discord.com/channels/669337241478365203/703036530926813324/717822630480183396)
*rwxrob*
Okay, `/usr/bin/env` is a dangerous, inefficient, stupid invention from mostly Ruby programmers that is based on the entirely flawed assumption that interpreter can be be found safely in a user's PATH and --- more importantly --- that it can actually be trusted to be what is wanted. Fight me! :wink: https://rwx.gg/stupid/env  (btw, I was once solidely in the other camp)
