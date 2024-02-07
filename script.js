// You can add JavaScript functionality here
// For example, use document.getElementById and add event listeners to control smart home devices

// Example Toggle Lights function (you'll need to implement your own logic)
var currentTemperature = 78;
var temperatureDisplay = document.getElementById('temperature-display');
var lightsOn = false;

        document.getElementById('toggleLights').addEventListener('change', function() {
            lightsOn = this.checked;
            // Implement your toggle lights logic here
            console.log('Lights Toggled:', lightsOn);
        });

        document.getElementById('increaseTemperature').addEventListener('click', function() {
            currentTemperature++;
            updateTemperatureDisplay();
        });
        
        document.getElementById('decreaseTemperature').addEventListener('click', function() {
            currentTemperature--;
            updateTemperatureDisplay();
        });
        
        function updateTemperatureDisplay() {
            temperatureDisplay.textContent = currentTemperature + '°F';
        }
        
        var currentSongIndex = 0;
        var isPlaying = false;
        var songText = document.getElementById('song-text');
        var playPauseButton = document.getElementById('playPause');
        var nextTrackButton = document.getElementById('nextTrack');
        var stopButton = document.getElementById('stop');

        var songs = [
            "The Chicken Dance",
            "Funky Monkey",
            "Disco Inferno",
            "Banana Song",
            "Happy Feet",
            "Boogie Wonderland"
        ];

        var currentSongIndex = 0;
        var isPlaying = false;

        playPauseButton.addEventListener('click', function() {
            isPlaying = !isPlaying;
            updatePlayPauseButton();
            if (isPlaying) {
                playRandomSong();
            }
        });

        nextTrackButton.addEventListener('click', function() {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            playRandomSong();
        });

        stopButton.addEventListener('click', function() {
            isPlaying = false;
            updatePlayPauseButton();
            stopSong();
        });

        function updatePlayPauseButton() {
            playPauseButton.innerHTML = isPlaying ? '<i class="fas fa-pause"></i> Pause' : '<i class="fas fa-play"></i> Play';
        }

        function playRandomSong() {
            if (isPlaying) {
                songText.textContent = songs[currentSongIndex];
            }
        }

        function stopSong() {
            songText.textContent = "Music Stopped";
        }