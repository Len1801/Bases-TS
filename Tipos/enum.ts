(() => {

    enum AudioLevel {
        min = 1,
        medium,
        max = 10
    }    

    // let currentAudio: AudioLevel = AudioLevel.max;
    let currentAudio = AudioLevel.min;

    console.log( currentAudio );
    console.log( AudioLevel );

})()