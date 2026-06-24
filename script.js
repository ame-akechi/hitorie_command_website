
    (function() {
      'use strict';

      // =============================================================
      // 1. 歌曲数据（可在此数组直接替换为自己的专辑与音乐）
      // =============================================================
      var songs = [
        { name: '3分29秒',             artist: 'HITORIE', cover: '素材/3分29秒 .jpg',             audio: '素材/3分29秒.mp3',             lyric: '素材/3分29秒.txt' },
        { name: '風、花',             artist: 'HITORIE', cover: '素材/風、花.jpg',              audio: '素材/風、花.mp3',              lyric: '素材/風、花.txt' },
        { name: 'curved edge',         artist: 'HITORIE', cover: '素材/curved edge.jpg',          audio: '素材/curved edge.mp3',          lyric: '素材/curved edge.txt' },
        { name: 'NOTOK',               artist: 'HITORIE', cover: '素材/NOTOK.jpg',                audio: '素材/NOTOK.mp3',                lyric: '素材/NOTOK.txt' },
        { name: 'アンノウン・マザーグース', artist: 'HITORIE', cover: '素材/アンノウン・マザーグース .jpg', audio: '素材/アンノウン・マザーグース.mp3', lyric: '素材/アンノウン・マザーグース.txt' },
        { name: 'オン・ザ・フロントライン', artist: 'HITORIE', cover: '素材/オン・ザ・フロントライン.jpg', audio: '素材/オン・ザ・フロントライン.mp3', lyric: '素材/オン・ザ・フロントライン.txt' },
        { name: 'ジャガーノート',     artist: 'HITORIE', cover: '素材/ジャガーノート.jpg',      audio: '素材/ジャガーノート.mp3',      lyric: '素材/ジャガーノート.txt' },
        { name: 'ポラリス',           artist: 'HITORIE', cover: '素材/ポラリス.jpg',            audio: '素材/ポラリス.mp3',            lyric: '素材/ポラリス.txt' },
        { name: 'みにくいかたち',     artist: 'HITORIE', cover: '素材/みにくいかたち.jpg',      audio: '素材/みにくいかたち.mp3',      lyric: '素材/みにくいかたち.txt' },
        { name: 'ワンミーツハー',     artist: 'HITORIE', cover: '素材/ワンミーツハー.jpg',      audio: '素材/ワンミーツハー.mp3',      lyric: '素材/ワンミーツハー.txt' }
      ];


      // =============================================================
      // 2. DOM 引用
      // =============================================================
      var audio        = document.getElementById('audioPlayer');
      var page1        = document.getElementById('page1');
      var page2        = document.getElementById('page2');

      // 碟片相关
      var vinylDisc    = document.getElementById('vinylDisc');
      var discCoverImg = document.getElementById('discCoverImg');
      var discSongName = document.getElementById('discSongName');
      var discArtist   = document.getElementById('discArtist');
      var discTime     = document.getElementById('discCurrentTime');
      var discDur      = document.getElementById('discDuration');
      var discFill     = document.getElementById('discFill');
      var discTrack    = document.getElementById('discTrack');
      var vinylIndex   = document.getElementById('vinylIndex');
      var vinylPrev    = document.getElementById('vinylPrev');
      var vinylNext    = document.getElementById('vinylNext');
      var lyricsContainer = document.getElementById('lyricsContainer');
      var lyricsContent   = document.getElementById('lyricsContent');
      var lyricsHint      = document.getElementById('lyricsHint');

      // 底部播放器
      var playBtn      = document.getElementById('playBtn');
      var playIcon     = document.getElementById('playIcon');
      var prevBtn      = document.getElementById('prevBtn');
      var nextBtn      = document.getElementById('nextBtn');
      var loopBtn      = document.getElementById('loopBtn');
      var loopIcon     = document.getElementById('loopIcon');
      var progressFill = document.getElementById('progressFill');
      var progressTrack= document.getElementById('progressTrack');
      var currentTimeEl= document.getElementById('currentTime');
      var durationEl   = document.getElementById('duration');
      var playerCover  = document.getElementById('playerCover').querySelector('img');
      var playerSongName = document.getElementById('playerSongName');
      var playerArtist = document.getElementById('playerArtist');
      var volumeFill   = document.getElementById('volumeFill');
      var volumeTrack  = document.getElementById('volumeTrack');
      var volIcon      = document.getElementById('volIcon');
      var likeBtn      = document.getElementById('likeBtn');
      var likeIcon     = document.getElementById('likeIcon');
      var songCount    = document.getElementById('songCount');

      // =============================================================
      // 3. 状态变量
      // =============================================================
      var currentIndex   = 0;
      var isPlaying      = false;
      var isSeeking      = false;
      var loopMode       = 0;       // 0=顺序, 1=单曲循环, 2=列表循环
      var isVolDragging  = false;
      var isProgDragging = false;
      var isDiscDragging = false;   // 碟片拖动
      var isLyricsView   = false;   // 是否显示歌词
      var likedSongs     = {};       // 点赞记录 { index: true }

      // 备用封面
      var fallbackCover = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="#12183a" width="200" height="200"/><text x="100" y="105" text-anchor="middle" fill="#5BCDC6" font-size="40" font-family="sans-serif">♪</text></svg>');

      // =============================================================
      // 4. 初始化
      // =============================================================
      function init() {
        loadHitorieBio();
        updateSongCount();
        initVinylDisc();
        loadSong(0, false);
        bindEvents();
        // 初始碟片进度
        updateVinylUI();
      }

      // -------- 读取 hitorie.txt --------
      function loadHitorieBio() {
        var bioEl = document.getElementById('bioContent');
        var fallbackHtml =
          '<p>ヒトリエ（HITORIE) 简介</p>' +
          '<p>Hitorie (日语:ヒトリエ) 是日本的摇滚乐队，由wowaka组建，成员包括wowaka (2011-2019年担任主唱与节奏吉他手)、イガラシ(ygarshy;贝斯手)、シノダ(shinoda;主音吉他手，2019年起担任现任主唱)和ゆ一まお(yumao;鼓手）。</p>' +
          '<p>其前身Hitori Atelier于2011年冬成立，2012年Shinoda加入后改名为现在的Hitorie。音乐类型为J-ROCK、摇滚、另类摇滚、流行摇滚、后摇滚、梦幻流行、J-POP。</p>';
        bioEl.innerHTML = '<p>加载中...</p>';
        try {
          fetch('hitorie.txt')
            .then(function(res) {
              if (!res.ok) throw new Error('fail');
              return res.text();
            })
            .then(function(text) {
              var paragraphs = text.split(/\n{2,}/);
              var html = '';
              paragraphs.forEach(function(p) {
                p = p.trim();
                if (p) html += '<p>' + p.replace(/\n/g, '<br>') + '</p>';
              });
              bioEl.innerHTML = html || fallbackHtml;
            })
            .catch(function() { bioEl.innerHTML = fallbackHtml; });
        } catch(e) { bioEl.innerHTML = fallbackHtml; }
      }

      // -------- 碟片拖拽切歌初始化 --------
      function initVinylDisc() {
        var startX = 0;
        var isDragging = false;

        vinylDisc.addEventListener('mousedown', function(e) {
          isDragging = true;
          startX = e.clientX;
          isDiscDragging = false;
          vinylDisc.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', function(e) {
          if (!isDragging) return;
          var dx = e.clientX - startX;
          if (Math.abs(dx) > 30) {
            isDiscDragging = true;
          }
        });

        document.addEventListener('mouseup', function(e) {
          if (!isDragging) return;
          isDragging = false;
          vinylDisc.style.cursor = 'pointer';
          if (isDiscDragging) {
            var dx = e.clientX - startX;
            if (dx < -50) {
              nextSong();      // 向左滑 → 下一曲
            } else if (dx > 50) {
              prevSong();      // 向右滑 → 上一曲
            }
            isDiscDragging = false;
          } else {
            // 单击 → 切换歌词/碟片视图
            toggleLyrics();
          }
        });

        // 触屏支持
        var touchStartX = 0;
        var touchSwiping = false;
        vinylDisc.addEventListener('touchstart', function(e) {
          touchStartX = e.touches[0].clientX;
          touchSwiping = false;
        });
        vinylDisc.addEventListener('touchmove', function(e) {
          var dx = e.touches[0].clientX - touchStartX;
          if (Math.abs(dx) > 30) touchSwiping = true;
        });
        vinylDisc.addEventListener('touchend', function(e) {
          if (touchSwiping) {
            var dx = e.changedTouches[0].clientX - touchStartX;
            if (dx < -50) nextSong();
            else if (dx > 50) prevSong();
          } else {
            togglePlay();
          }
        });
      }

      // -------- 更新歌曲计数 --------
      function updateSongCount() {
        songCount.textContent = songs.length + ' 首歌曲';
      }

      // =============================================================
      // 5. 音频加载与播放
      // =============================================================
      function loadSong(index, autoPlay) {
        if (index < 0) index = songs.length - 1;
        if (index >= songs.length) index = 0;
        currentIndex = index;

        var song = songs[currentIndex];
        audio.src = song.audio;
        audio.load();

        // 更新底部播放器
        playerCover.src = song.cover;
        playerCover.alt = song.name;
        playerCover.onerror = function() { this.src = fallbackCover; };
        playerSongName.textContent = song.name;
        playerArtist.textContent = song.artist;

        // 更新碟片
        discCoverImg.src = song.cover;
        discCoverImg.alt = song.name;
        discCoverImg.onerror = function() { this.src = fallbackCover; };
        discSongName.textContent = song.name;
        discArtist.textContent = song.artist;

        // 重置进度
        progressFill.style.width = '0%';
        currentTimeEl.textContent = '0:00';
        durationEl.textContent = '0:00';
        discFill.style.width = '0%';
        discTime.textContent = '0:00';
        discDur.textContent = '0:00';

        // 更新索引
        vinylIndex.textContent = (currentIndex + 1) + ' / ' + songs.length;

        // 更新点赞状态
        updateLikeUI();

        // 切歌时关闭歌词视图，回到碟片
        if (isLyricsView) {
          isLyricsView = false;
          lyricsContainer.classList.remove('show');
          vinylDisc.style.opacity = '1';
          vinylDisc.style.pointerEvents = 'auto';
          lyricsHint.style.opacity = '1';
        }

        if (autoPlay) {
          audio.play().then(function() {
            isPlaying = true;
            updatePlayIcon();
            updateVinylPlayState();
          }).catch(function() {
            isPlaying = false;
            updatePlayIcon();
            updateVinylPlayState();
          });
        } else {
          isPlaying = false;
          updatePlayIcon();
          updateVinylPlayState();
        }
      }

      // -------- 碟片旋转状态 --------
      function updateVinylPlayState() {
        if (isPlaying) {
          vinylDisc.classList.add('playing');
          vinylDisc.classList.remove('paused');
        } else {
          vinylDisc.classList.add('paused');
          // 暂停时保持角度 (animation-play-state: paused 已在 CSS 处理)
        }
      }

      // -------- 更新碟片 UI（同步进度） --------
      function updateVinylUI() {
        // 由 timeupdate 事件驱动
      }

      // -------- 歌词切换 --------
      function toggleLyrics() {
        isLyricsView = !isLyricsView;
        if (isLyricsView) {
          // 显示歌词
          loadLyrics(currentIndex);
          lyricsContainer.classList.add('show');
          vinylDisc.style.opacity = '0';
          vinylDisc.style.pointerEvents = 'none';
          lyricsHint.style.opacity = '0';
        } else {
          // 隐藏歌词，恢复碟片
          lyricsContainer.classList.remove('show');
          vinylDisc.style.opacity = '1';
          vinylDisc.style.pointerEvents = 'auto';
          lyricsHint.style.opacity = '1';
        }
      }

      // -------- 点赞切换 --------
      function toggleLike() {
        likedSongs[currentIndex] = !likedSongs[currentIndex];
        updateLikeUI();
      }
      function updateLikeUI() {
        var liked = !!likedSongs[currentIndex];
        likeBtn.classList.toggle('liked', liked);
        if (liked) {
          likeIcon.setAttribute('fill', '#ff3b5c');
          likeIcon.setAttribute('stroke', '#ff3b5c');
        } else {
          likeIcon.setAttribute('fill', 'none');
          likeIcon.setAttribute('stroke', 'currentColor');
        }
        document.getElementById('page2Bg').classList.toggle('liked', liked);
      }

      // -------- 加载歌词 --------
      function loadLyrics(index) {
        var song = songs[index];
        if (!song.lyric) {
          lyricsContent.innerHTML = '<p class="lyrics-loading">暂无歌词</p>';
          return;
        }
        lyricsContent.innerHTML = '<p class="lyrics-loading">加载歌词中...</p>';
        try {
          fetch(song.lyric)
            .then(function(res) {
              if (!res.ok) throw new Error('fail');
              return res.text();
            })
            .then(function(text) {
              renderLyrics(text);
            })
            .catch(function() {
              lyricsContent.innerHTML = '<p class="lyrics-loading">歌词加载失败</p>';
            });
        } catch(e) {
          lyricsContent.innerHTML = '<p class="lyrics-loading">歌词加载失败</p>';
        }
      }

      // -------- 渲染歌词（按行分段） --------
      function renderLyrics(text) {
        var lines = text.split('\n');
        var html = '';
        lines.forEach(function(line) {
          line = line.trim();
          if (line) {
            html += '<p>' + escapeHtml(line) + '</p>';
          }
        });
        lyricsContent.innerHTML = html || '<p class="lyrics-loading">暂无歌词</p>';
      }

      // -------- 播放 / 暂停 --------
      function togglePlay() {
        if (audio.paused) {
          audio.play().then(function() {
            isPlaying = true;
            updatePlayIcon();
            updateVinylPlayState();
          }).catch(function() {});
        } else {
          audio.pause();
          isPlaying = false;
          updatePlayIcon();
          updateVinylPlayState();
        }
      }

      // -------- 更新播放按钮图标 --------
      function updatePlayIcon() {
        if (isPlaying) {
          playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
        } else {
          playIcon.innerHTML = '<polygon points="8 5 19 12 8 19 8 5"/>';
        }
      }

      // -------- 上一曲 / 下一曲 --------
      function prevSong() { loadSong(currentIndex - 1, true); }
      function nextSong() { loadSong(currentIndex + 1, true); }

      // =============================================================
      // 6. 循环模式
      // =============================================================
      function toggleLoop() {
        loopMode = (loopMode + 1) % 3;
        updateLoopUI();
      }
      function updateLoopUI() {
        loopBtn.classList.toggle('active-loop', loopMode > 0);
        if (loopMode === 0) {
          loopIcon.innerHTML = '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>';
          loopBtn.title = '顺序播放';
        } else if (loopMode === 1) {
          loopIcon.innerHTML = '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/><text x="12" y="14" font-size="10" fill="currentColor" text-anchor="middle" font-weight="bold">1</text>';
          loopBtn.title = '单曲循环';
        } else {
          loopIcon.innerHTML = '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/><text x="12" y="14" font-size="8" fill="currentColor" text-anchor="middle" font-weight="bold">⟳</text>';
          loopBtn.title = '列表循环';
        }
      }

      // -------- 简单转义 HTML --------
      function escapeHtml(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
      }

      // =============================================================
      // 7. 时间格式化
      // =============================================================
      function formatTime(seconds) {
        if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
        var m = Math.floor(seconds / 60);
        var s = Math.floor(seconds % 60);
        return m + ':' + (s < 10 ? '0' : '') + s;
      }

      // =============================================================
      // 8. 事件绑定
      // =============================================================
      function bindEvents() {

        // 播放 / 暂停
        playBtn.addEventListener('click', togglePlay);

        // 上 / 下一曲（底部播放器）
        prevBtn.addEventListener('click', prevSong);
        nextBtn.addEventListener('click', nextSong);

        // 碟片三角按钮
        vinylPrev.addEventListener('click', prevSong);
        vinylNext.addEventListener('click', nextSong);

        // 点赞
        likeBtn.addEventListener('click', toggleLike);

        // 循环
        loopBtn.addEventListener('click', toggleLoop);

        // -------- 音量 --------
        function setVolume(clientX) {
          var rect = volumeTrack.getBoundingClientRect();
          var pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
          audio.volume = pct;
          volumeFill.style.width = (pct * 100) + '%';
          updateVolumeIcon(pct);
        }
        volumeTrack.addEventListener('mousedown', function(e) {
          isVolDragging = true;
          setVolume(e.clientX);
        });
        document.addEventListener('mousemove', function(e) {
          if (isVolDragging) setVolume(e.clientX);
        });
        document.addEventListener('mouseup', function() { isVolDragging = false; });
        volIcon.addEventListener('click', function() {
          if (audio.volume > 0) {
            audio.dataset.prevVolume = audio.volume;
            audio.volume = 0;
            volumeFill.style.width = '0%';
            updateVolumeIcon(0);
          } else {
            var prev = parseFloat(audio.dataset.prevVolume) || 0.8;
            audio.volume = prev;
            volumeFill.style.width = (prev * 100) + '%';
            updateVolumeIcon(prev);
          }
        });

        // -------- 底部进度条拖动 --------
        function setProgress(clientX) {
          var rect = progressTrack.getBoundingClientRect();
          var pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
          if (audio.duration) audio.currentTime = pct * audio.duration;
          progressFill.style.width = (pct * 100) + '%';
        }
        progressTrack.addEventListener('mousedown', function(e) {
          isProgDragging = true;
          setProgress(e.clientX);
        });
        document.addEventListener('mousemove', function(e) {
          if (isProgDragging) {
            isSeeking = true;
            setProgress(e.clientX);
          }
        });
        document.addEventListener('mouseup', function() {
          if (isProgDragging) {
            isProgDragging = false;
            setTimeout(function() { isSeeking = false; }, 100);
          }
        });

        // -------- 碟片进度条拖动 --------
        function setDiscProgress(clientX) {
          var rect = discTrack.getBoundingClientRect();
          var pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
          if (audio.duration) audio.currentTime = pct * audio.duration;
          discFill.style.width = (pct * 100) + '%';
        }
        discTrack.addEventListener('mousedown', function(e) {
          isSeeking = true;
          setDiscProgress(e.clientX);
        });
        document.addEventListener('mousemove', function(e) {
          if (isSeeking) {
            // 如果拖动的是底部进度条，碟片进度也会同步更新
            // 但如果拖的是碟片进度条，需要同步更新底部
          }
        });
        document.addEventListener('mouseup', function() {
          setTimeout(function() { isSeeking = false; }, 100);
        });

        // -------- 音频事件 --------
        audio.addEventListener('timeupdate', function() {
          if (!isSeeking && audio.duration) {
            var pct = (audio.currentTime / audio.duration) * 100;
            // 同步两个进度条
            progressFill.style.width = pct + '%';
            discFill.style.width = pct + '%';
            currentTimeEl.textContent = formatTime(audio.currentTime);
            discTime.textContent = formatTime(audio.currentTime);
          }
        });

        audio.addEventListener('loadedmetadata', function() {
          var d = formatTime(audio.duration);
          durationEl.textContent = d;
          discDur.textContent = d;
        });

        audio.addEventListener('ended', function() {
          if (loopMode === 1) {
            audio.currentTime = 0;
            audio.play().catch(function() {});
          } else if (loopMode === 2 || currentIndex < songs.length - 1) {
            if (loopMode === 2 && currentIndex >= songs.length - 1) {
              loadSong(0, true);
            } else {
              nextSong();
            }
          } else {
            isPlaying = false;
            updatePlayIcon();
            updateVinylPlayState();
          }
        });

        audio.addEventListener('play', function() {
          isPlaying = true;
          updatePlayIcon();
          updateVinylPlayState();
        });

        audio.addEventListener('pause', function() {
          isPlaying = false;
          updatePlayIcon();
          updateVinylPlayState();
        });

        // -------- 歌词容器点击切回碟片 --------
        lyricsContainer.addEventListener('click', function() {
          if (isLyricsView) toggleLyrics();
        });

        // 空格键
        document.addEventListener('keydown', function(e) {
          if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
          if (e.code === 'Space') {
            e.preventDefault();
            togglePlay();
          }
        });
      }

      // -------- 音量图标 --------
      function updateVolumeIcon(vol) {
        var paths;
        if (vol === 0) {
          paths = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" stroke-width="2"/><line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" stroke-width="2"/>';
        } else if (vol < 0.5) {
          paths = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>';
        } else {
          paths = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>';
        }
        volIcon.innerHTML = paths;
      }

      // =============================================================
      // 9. 页面切换
      // =============================================================
      window.switchToPage = function(num) {
        if (num === 1) {
          page1.classList.remove('page-hidden');
          page1.classList.add('page-show');
          page2.classList.remove('page-show');
          page2.classList.add('page-hidden');
          document.getElementById('bottomPlayer').style.display = 'none';
          document.getElementById('disclaimerFixed').style.display = 'none';
        } else {
          page2.classList.remove('page-hidden');
          page2.classList.add('page-show');
          page1.classList.remove('page-show');
          page1.classList.add('page-hidden');
          document.getElementById('bottomPlayer').style.display = 'flex';
          document.getElementById('disclaimerFixed').style.display = 'block';
        }
      };

      // =============================================================
      // 10. 启动
      // =============================================================
      init();
      document.getElementById('bottomPlayer').style.display = 'none';
      document.getElementById('disclaimerFixed').style.display = 'none';

    })();
  
