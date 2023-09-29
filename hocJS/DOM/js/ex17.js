//Tạo element
var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

var progressBarWidth = progressBar.clientWidth;
var initialClientX;
var value;
var currentValue = 0;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    // -> Lấy offsetX -> tính phần trăm theo chiều rộng
    value = (e.offsetX * 100) / progressBarWidth;

    progress.style.width = `${value}%`;

    document.addEventListener("mousemove", handleDrag);
    initialClientX = e.clientX;
    currentValue = value;
    handleInput(value);
    var currentTime = (value / 100) * audio.duration;
    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handleDrag);
  initialClientX = e.clientX;
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
  currentValue = value;
  //   handleChange(value);
});

var handleDrag = function (e) {
  //   console.log(initialClientX, e.clientX);
  var moveWidth = e.clientX - initialClientX;
  value = (moveWidth * 100) / progressBarWidth + currentValue;

  if (value < 0) {
    value = 0;
  }

  if (value > 100) {
    value = 100;
  }

  progress.style.width = `${value}%`;
  //   handleInput(value);
};

//Nhận giá trị khi kéo, khi bấm chuột xuống

//1. Nhả chuột
var handleChange = function (value) {
  //   console.log(value);
};

//2. Bấm chuột xuống, kéo
var handleInput = function (value) {
  //   console.log(value);
};

var audio = document.querySelector(".audio");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;
var playBtn = document.querySelector(".player .play-btn");
var playIcon = `<i class="fa-solid fa-play"></i>`;
var pauseIcon = `<i class="fa-solid fa-pause"></i>`;

var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60); //Lấy được phút

  seconds = Math.floor(seconds - mins * 60); // Tính số giây còn lại

  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};
//Lăng nghe sự kiện loadeddata -> Khi nào file audio tải xong
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    // this.innerHTML = pauseIcon;
  } else {
    audio.pause();
    // this.innerHTML = playIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  currentTimeEl.innerText = getTime(audio.currentTime);
  var value = (audio.currentTime * 100) / audio.duration;
  progress.style.width = `${value}%`;
});

audio.addEventListener("play", function () {
  playBtn.innerHTML = pauseIcon;
});

audio.addEventListener("pause", function () {
  playBtn.innerHTML = playIcon;
});

console.log(lyric);
var karaokeContent = document.querySelector(".karaoke-content");
var currentIndex;
var handleKaraoke = function () {
  var currentTime = audio.currentTime * 1000;
  requestId = requestAnimationFrame(handleKaraoke);
  var index = lyric.findIndex(function (sentences) {
    var words = sentences.words;
    return (
      currentTime >= words[0].startTime &&
      currentTime <= words[words.length - 1].endTime
    );
  });
  handlePaintColor(currentTime);
  if (index !== -1 && currentIndex !== index) {
    currentIndex = index;
    if (index === 0) {
      var sentenceHtml = `
            <p>${getSentences(0)}</p>
            <p>${getSentences(1)}</p>
            `;
      karaokeContent.innerHTML = sentenceHtml;
    } else {
      nextSentences(index);
    }
  }
};

var handlePaintColor = function (currentTime) {
  var wordEle = karaokeContent.querySelectorAll(".word");
  if (wordEle.length) {
    wordEle.forEach(function (item, index) {
      var startTime = item.dataset.startTime;
      var endTime = item.dataset.endTime;
    //   console.log(endTime, startTime);
      if (currentTime > startTime && currentTime < endTime) {
        var rate = ((currentTime - startTime) / (endTime - startTime)) * 100;
        item.children[0].style.width = `${rate}%`;
      }
      if (index > 0 && currentTime >= wordEle[index - 1].dataset.endTime) {
        wordEle[index - 1].children[0].style.width = `${100}%`;
      }
    });
  }
};

var getSentences = function (index) {
  var words = lyric[index].words;
  var sentences = words
    .map(function (word) {
      return `<span class = "word" data-start-time = "${word.startTime}" data-end-time = "${word.endTime}">${word.data}<span>${word.data}</span></span>`;
    })
    .join(" ");
  return sentences;
};

var nextSentences = function (index) {
  var lines = karaokeContent.children;
  if (index % 2 === 0) {
    lines[0].style.opacity = 0;
    lines[0].style.transition = `opacity 0.3s ease`;
    setTimeout(function () {
      lines[0].innerHTML = getSentences(index + 1);
      lines[0].style.opacity = 1;
    }, 200);
  } else {
    lines[1].style.opacity = 0;
    lines[1].style.transition = `opacity 0.4s ease`;
    setTimeout(function () {
      lines[1].innerHTML = getSentences(index + 1);
      lines[1].style.opacity = 1;
    }, 200);
  }
};

var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

var cancelAnimationFrame =
  window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var requestId;

audio.addEventListener("play", function () {
  requestId = requestAnimationFrame(handleKaraoke);
});

audio.addEventListener("pause", function () {
  cancelAnimationFrame(requestId);
});
