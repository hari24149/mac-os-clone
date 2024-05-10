function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;

    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    const dateString = now.toDateString();
    const dayString = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.getElementById('time').innerText = timeString;
    document.getElementById('date').innerText = dateString;
    document.getElementById('day').innerText = dayString;
}

function chrg() {
  let batteryIsCharging = false;

  const updateChargingStatus = () => {
    const batteryStatusElement = document.getElementById("batteryStatus");
  };

  const updateBatteryPercentage = (percentage) => {
    const batteryPercentageElement = document.getElementById("batteryPercentage");
    batteryPercentageElement.textContent = `${percentage}%`;

    const fillBatteryElement = document.getElementById("fillBattery");
    fillBatteryElement.style.width = `${percentage}%`;
    if (batteryIsCharging)
      {
        fillBatteryElement.style.backgroundColor = "green";
      }
      else{
        if (percentage < 30) {
          fillBatteryElement.style.backgroundColor = "red";
        } else {
          fillBatteryElement.style.backgroundColor = "white";
        }
      }
  
  };

  navigator.getBattery().then(function(battery) {
    batteryIsCharging = battery.charging;
    updateChargingStatus();
    updateBatteryPercentage(Math.floor(battery.level * 100));

    battery.addEventListener('chargingchange', function() {
        batteryIsCharging = battery.charging;
        updateChargingStatus();
    });

    battery.addEventListener('levelchange', function() {
        updateBatteryPercentage(Math.floor(battery.level * 100));
    });
  });
}

  function move() {
    let highestZ = 1;
  
    class Window {
      holdingWindow = false;
      mouseTouchX = 0;
      mouseTouchY = 0;
      mouseX = 0;
      mouseY = 0;
      prevMouseX = 0;
      prevMouseY = 0;
      velX = 0;
      velY = 0;
      rotation = 0;
      currentWindowX = 0;
      currentWindowY = 0;
      rotating = false;
  
      init(windowElement) {
        document.addEventListener('mousemove', (e) => {
          if (!this.rotating && this.holdingWindow) {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
  
            this.velX = this.mouseX - this.prevMouseX;
            this.velY = this.mouseY - this.prevMouseY;
  
            this.currentWindowX += this.velX;
            this.currentWindowY += this.velY;
  
            this.prevMouseX = this.mouseX;
            this.prevMouseY = this.mouseY;
  
            windowElement.style.transform = `translateX(${this.currentWindowX}px) translateY(${this.currentWindowY}px) rotateZ(${this.rotation}deg)`;
          }
        })
  
        const headerElement = windowElement.querySelector('.hed');
  
        headerElement.addEventListener('mousedown', (e) => {
          if (e.button === 0) {
            if (this.holdingWindow) return;
            this.holdingWindow = true;
  
            windowElement.style.zIndex = highestZ;
            highestZ += 1;
  
            this.mouseTouchX = e.clientX;
            this.mouseTouchY = e.clientY;
            this.prevMouseX = e.clientX;
            this.prevMouseY = e.clientY;
          } else if (e.button === 2) {
            this.rotating = true;
          }
        });
  
        document.addEventListener('mouseup', () => {
          this.holdingWindow = false;
          this.rotating = false;
        });
      }
    }
  
    const windows = Array.from(document.querySelectorAll('.window'));
  
    windows.forEach(windowElement => {
      const w = new Window();
      w.init(windowElement);
    });
  }

  function loadContent() {
    var input = document.getElementById('url-input').value;
    var iframe = document.getElementById('browser-frame');
    if (input.startsWith('http://') || input.startsWith('https://')) {
      iframe.src = input;
    } else {
      iframe.src = 'https://www.bing.com/search?q=' + encodeURIComponent(input);
    }
  }




  function make() {
    let highestZ = 1;
  
    class Window {
      holdingWindow = false;
      mouseTouchX = 0;
      mouseTouchY = 0;
      mouseX = 0;
      mouseY = 0;
      prevMouseX = 0;
      prevMouseY = 0;
      velX = 0;
      velY = 0;
      rotation = 0;
      currentWindowX = 0;
      currentWindowY = 0;
      rotating = false;
  
      init(windowElement) {
        document.addEventListener('mousemove', (e) => {
          if (!this.rotating && this.holdingWindow) {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
  
            this.velX = this.mouseX - this.prevMouseX;
            this.velY = this.mouseY - this.prevMouseY;
  
            this.currentWindowX += this.velX;
            this.currentWindowY += this.velY;
  
            this.prevMouseX = this.mouseX;
            this.prevMouseY = this.mouseY;
  
            windowElement.style.transform = `translateX(${this.currentWindowX}px) translateY(${this.currentWindowY}px) rotateZ(${this.rotation}deg)`;
          }
        })
  
        const headerElement = windowElement.querySelector('.hed');
  
        headerElement.addEventListener('mousedown', (e) => {
          if (e.button === 0) {
            if (this.holdingWindow) return;
            this.holdingWindow = true;
  
            windowElement.style.zIndex = highestZ;
            highestZ += 1;
  
            this.mouseTouchX = e.clientX;
            this.mouseTouchY = e.clientY;
            this.prevMouseX = e.clientX;
            this.prevMouseY = e.clientY;
          } else if (e.button === 2) {
            this.rotating = true;
          }
        });
  
        document.addEventListener('mouseup', () => {
          this.holdingWindow = false;
          this.rotating = false;
        });
      }
    }
  
    const windows = Array.from(document.querySelectorAll('.window'));
  
    windows.forEach(windowElement => {
      const w = new Window();
      w.init(windowElement);
    });
  }

  function loadContent() {
    var input = document.getElementById('url-input').value;
    var iframe = document.getElementById('browser-frame');
    if (input.startsWith('http://') || input.startsWith('https://')) {
      iframe.src = input;
    } else {
      iframe.src = 'https://www.bing.com/search?q=' + encodeURIComponent(input);
    }
  }


function calapp() {
  document.getElementById("calapp").style.display = "block";
}
function closeca() {
  document.getElementById("calapp").style.display = "none";
}


function requestNotificationPermission(message) {
  Notification.requestPermission()
    .then(permission => {
      if (permission === 'granted') {
        if (message.trim() !== '') {
          new Notification(message);
        } else {
          alert('Please enter a notification message.');
        }
      } else {
        alert('Notification permission denied.');
      }
    })
    .catch(err => {
      console.error('Error requesting notification permission:', err);
    });
}
function noteapp() {
  document.getElementById("noteapp").style.display = "block";
}
function closeno() {
  requestNotificationPermission('closing note');
    document.getElementById("noteapp").style.display = "none";
}

function noteapp1() {
  var a = confirm("opening note");
  if( a === true)
  {
    document.getElementById("noteapp1").style.display = "block";
  closefil();
  }
  else{

  }
}
function closeno1() {
  
  document.getElementById("noteapp1").style.display = "none";
  requestNotificationPermission('Closing note');
}


function closeset() {
  document.getElementById("settings").style.display = "none";
}
function settings() {
  document.getElementById("settings").style.display = "block";
}


function closefil() {
  document.getElementById("finder").style.display = "none";
}
function finder() {
  document.getElementById("finder").style.display = "block";
}

function closechr() {
  document.getElementById("chrome").style.display = "none";
}
function chrome() {
  document.getElementById("chrome").style.display = "block";
}


function closemap() {
  document.getElementById("maps").style.display = "none";
}
function map() {
  document.getElementById("maps").style.display = "block";
}

function stopVLC() {
  const videoPlayer = document.getElementById('videoPlayer');
  videoPlayer.pause();
  videoPlayer.style.display = 'none';
}

function closevlc() {
  document.getElementById("vlc").style.display = "none";
  stopVLC();
}
function vlc1() {
  document.getElementById("vlc").style.display = "block";
  vlc()
}

function shakeElement(element) {
  element.classList.add('shake');
  setTimeout(function() {
      element.classList.remove('shake');
  }, 400); 
}


// ************************************fil************************************
document.getElementById('fal').addEventListener('mouseover', function() {
  document.getElementById('fileh').style.display = 'block';
});
document.getElementById('fileh').addEventListener('mouseover', function() {
  document.getElementById('fileh').style.display = 'block';
});
document.getElementById('fal').addEventListener('mouseout', function() {
    document.getElementById('fileh').style.display = 'none';
});
document.getElementById('fileh').addEventListener('mouseout', function() {
  document.getElementById('fileh').style.display = 'none';
});
// **********************************logo***********************************************

document.getElementById('jam').addEventListener('mouseover', function() {
  document.getElementById('fileg').style.display = 'block';
});
document.getElementById('fileg').addEventListener('mouseover', function() {
  document.getElementById('fileg').style.display = 'block';
});
document.getElementById('jam').addEventListener('mouseout', function() {
    document.getElementById('fileg').style.display = 'none';
});
document.getElementById('fileg').addEventListener('mouseout', function() {
  document.getElementById('fileg').style.display = 'none';
});
// *******************************************************************************************
// *******************************************controler*********************************************
document.getElementById('con').addEventListener('mouseover', function() {
  document.getElementById('controler').style.display = 'block';
});
document.getElementById('controler').addEventListener('mouseover', function() {
  document.getElementById('controler').style.display = 'block';
});
document.getElementById('con').addEventListener('mouseout', function() {
    document.getElementById('controler').style.display = 'none';
});
document.getElementById('controler').addEventListener('mouseout', function() {
  document.getElementById('controler').style.display = 'none';
});
// **************************************************************************************************
function toggleInput() {
  var input = document.querySelector('.input');
  var currentMarginLeft = input.style.marginLeft;
  input.style.marginLeft = currentMarginLeft === '-10%' ? '80%' : '-10%';
}


function saveTextToFile() {
  const textToSave = document.querySelector('.notepad-textarea').value;
  const blob = new Blob([textToSave], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  const fileName = 'notes.txt';
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  
  const contextMenu = document.getElementById('contextMenu');
  contextMenu.style.left = `${event.clientX}px`;
  contextMenu.style.top = `${event.clientY}px`;
  contextMenu.style.display = 'block';
  // contextMenu.style.flexdirection = 'column';
});

document.addEventListener('click', function(event) {
  const contextMenu = document.getElementById('contextMenu');
  contextMenu.style.display = 'none';
});


let fileSystem = {};

function initFileSystem() {
  let storedFileSystem = localStorage.getItem('fileSystem');
  if (storedFileSystem) {
    fileSystem = JSON.parse(storedFileSystem);
  } else {
    fileSystem = {};
  }
}

function saveFileSystem() {
  localStorage.setItem('fileSystem', JSON.stringify(fileSystem));
}

function createFolder() {
  let foldersCount = Object.keys(fileSystem).filter(key => typeof fileSystem[key] === 'object').length;
  let folderName = `Folder ${foldersCount + 1}`;
  fileSystem[folderName] = [];
  saveFileSystem();
  renderFileExplorer();
}
function createFile() {
  let filesCount = Object.keys(fileSystem).filter(key => typeof fileSystem[key] === 'string').length;
  let fileName = `File ${filesCount + 1}`;
  let fileContent = `Sample content for ${fileName}`;
  fileSystem[fileName] = fileContent;
  saveFileSystem();
  renderFileExplorer();
}

function deleteSelectedFiles() {
  let checkboxes = document.querySelectorAll('.file-checkbox:checked');
  checkboxes.forEach(checkbox => {
    let fileName = checkbox.getAttribute('data-file');
    delete fileSystem[fileName];
  });
  saveFileSystem();
  renderFileExplorer();
}

function selectAllFiles() {
  let checkboxes = document.querySelectorAll('.file-checkbox');
  checkboxes.forEach(checkbox => {
    checkbox.checked = true;
  });
}

function renderFileExplorer() {
  let foldersElement = document.getElementById('folders');
  foldersElement.innerHTML = '';
  
  Object.keys(fileSystem).forEach(item => {
    let element = document.createElement('div');
    element.classList.add('file-item');
    
    let icon = document.createElement('img');
    if (typeof fileSystem[item] === 'object') {
      icon.src = 'icons/folder.png';
      icon.alt = 'Folder';
      icon.classList.add('folder-icon');
    } else {
      icon.src = 'icons/file.png';
      icon.alt = 'File';
      icon.classList.add('file-icon');
    }
    element.appendChild(icon);
    
    let name = document.createElement('span');
    name.textContent = item;
    element.appendChild(name);

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('file-checkbox');
    checkbox.setAttribute('data-file', item);
    element.appendChild(checkbox);
    
    if (typeof fileSystem[item] === 'object') {
      element.addEventListener('click', () => navigate(item));
    } else {
      element.addEventListener('click', () => showFileContent(item));
    }
    
    foldersElement.appendChild(element);
  });
}



function showFileContent(fileName) {
  var a = confirm("opening note");
  if( a === true)
  {
  noteapp();
  closefil();
  }
  else{

  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('createFolderBtn').addEventListener('click', createFolder);
  document.getElementById('createFileBtn').addEventListener('click', createFile);
  document.getElementById('createFileBtn2').addEventListener('click', createFile);
  document.getElementById('deleteSelected').addEventListener('click', deleteSelectedFiles);
  document.getElementById('selectAll').addEventListener('click', selectAllFiles);
 

});


function loadContent() {
  var input = document.getElementById('url-input').value;
  var iframe = document.getElementById('browser-frame');
  if (input.startsWith('http://') || input.startsWith('https://')) {
    iframe.src = input;
  } else {
    iframe.src = 'https://www.bing.com/search?q=' + encodeURIComponent(input);
  }
}
function vlc() {
  const fileInput = document.getElementById('fileInput');
  const videoPlayer = document.getElementById('videoPlayer');
  const fullscreenButton = document.getElementById('fullscreenButton');
  const playButton = document.getElementById('playButton');
  const audioLangSelect = document.getElementById('audioLangSelect');

  fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const path = URL.createObjectURL(file);
      videoPlayer.src = path;
      videoPlayer.style.display = 'flex';
      videoPlayer.play();
      playButton.textContent = 'Pause';
      // Reset audio language select options
      audioLangSelect.innerHTML = '<option value="">Select Audio Language</option>';
      // Retrieve audio tracks
      const audioTracks = videoPlayer.audioTracks;
      for (let i = 0; i < audioTracks.length; i++) {
        const lang = audioTracks[i].language;
        const option = document.createElement('option');
        option.value = lang;
        option.textContent = lang;
        audioLangSelect.appendChild(option);
      }
    }
  });

  // Play button click event
  playButton.addEventListener('click', function() {
    if (videoPlayer.paused) {
      videoPlayer.play();
      playButton.textContent = 'Pause';
      videoPlayer.style.display = 'flex';

    } else {
      videoPlayer.pause();
      playButton.textContent = 'Play';
    }
  });

  // Add event listener to fullscreen button
  fullscreenButton.addEventListener('click', function() {
    if (videoPlayer.requestFullscreen) {
      videoPlayer.requestFullscreen();
    } else if (videoPlayer.mozRequestFullScreen) {
      videoPlayer.mozRequestFullScreen();
    } else if (videoPlayer.webkitRequestFullscreen) {
      videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) {
      videoPlayer.msRequestFullscreen();
    }
  });

  audioLangSelect.addEventListener('change', function() {
    const selectedLang = this.value;
    const audioTracks = videoPlayer.audioTracks;
    for (let i = 0; i < audioTracks.length; i++) {
      const track = audioTracks[i];
      if (track.language === selectedLang) {
        track.enabled = true;
      } else {
        track.enabled = false;
      }
    }
  });
}



function appendToDisplay(value) {
  document.getElementById('display').value += value;
}
function clearDisplay() {
  document.getElementById('display').value = '';
}
function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
function closeca() {
  document.getElementById('calapp').style.display = 'none';
}
function backspace() {
  var display = document.getElementById("display");
  var currentValue = display.value;
  display.value = currentValue.slice(0, -1);
}

function openFullscreen() {
  const element = document.documentElement;
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
document.addEventListener('DOMContentLoaded', function() {
            openFullscreen();
        });

let currentImageIndex = 1;
    const maxImages = 3;
    const iconsFolder = 'aserts/';
    function changeWallpaper() {
        const currentImageUrl = `url('${iconsFolder}img${currentImageIndex}.jpg')`;
        document.body.style.backgroundImage = currentImageUrl;
        currentImageIndex = (currentImageIndex % maxImages) + 1; // Cycle through images
        document.getElementById('h').innerHTML= currentImageIndex;
    }

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function sleepConfirmation() {
      var a = confirm('Going to sleep in 3 seconds');
      if (a === true) {

        await sleep(3000);
          window.location.href = 'index.html';
      } else {
          // Do nothing
      }
  }

make(); 
initFileSystem();
renderFileExplorer();
move();
chrg();
setInterval(updateClock, 1000);
setInterval(chrg, 1000);
updateClock();
setTimeout(checkboxi, 3000);
rad();