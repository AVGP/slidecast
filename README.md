#Slidecast
## HTML5 presentation Chrome app

##What's this?
Slidecast allows you to build an HTML5 slide deck and load it into this Chrome app.
You can then present on an external device using a Chromecast.

## Status
Right now we have to wait for the Chromecast SDK to support Chrome packaged apps :(
Until then there is a fallback to the PeerJS version of the RemoteDOM PoC.

It can be used by pointing a browser on the "external screen" device to [http://avgp.github.io/remoteDOM/display.html](http://avgp.github.io/remoteDOM/display.html).
That website will display an "ID". Enter that number into the "Display ID" input field and click "Present".

## Contributing
Contributing, roughly, works like this:

1. Fork this repository
2. Do your changes locally
3. Rebase with this repository's master
4. Issue a pull request

Like this:

    git clone git@github.com:YOU/slidecast.git
    cd slidecast
    git remote add their git@github.com:AVGP/slidecast.git
    ...make your changes and commit them...
    git rebase their master
    git push origin master
and issue a pull request from your repository to mine.

## Contact

Contact me via Github issues or [Twitter @AVGP](https://twitter.com/avgp)