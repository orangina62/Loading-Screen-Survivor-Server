"use strict";

var isGmod = false;
var isTest = false;
var totalFiles = 50;
var totalCalled = false;
var downloadingFileCalled = false;
var percentage = 0;
var permanent = false; // ajout: évite l'erreur dans announce()

/**
 * Gmod Called functions
 */
function GameDetails(
  servername,
  serverurl,
  mapname,
  maxplayers,
  steamid,
  gamemode
) {
  debug("GameDetails called");
  isGmod = true;

  if (!isTest) {
    loadAll();
  }

  if (Config.title) {
    $("#title").html(Config.title);
  } else {
    $("#title").html(servername);
  }
  $("#title").fadeIn();

  if (Config.enableMap) {
    $("#mapNameValue").text(mapname);
  }

  if (Config.enableSteamID) {
    $("#steamid").html(steamid);
  }
  $("#steamid").fadeIn();
}

function SetFilesTotal(total) {
  debug("SetFilesTotal called total: " + total);
  totalCalled = true;
  totalFiles = total;
}

function SetFilesNeeded(needed) {
  debug("SetFilesNeeded called needed: " + needed);
  if (totalCalled) {
    var sPercentage = 100 - Math.round((needed / totalFiles) * 100);
    percentage = sPercentage;
    setLoad(sPercentage);
  }
}

function setLoad(percentage) {
  debug(percentage + "%");
  $("#progress-bar")
    .css("width", percentage + "%")
    .attr("aria-valuenow", percentage);
  $("#progress-text").text(Math.round(percentage) + "%");
}

var fileCount = 0;
function DownloadingFile(filename) {
  filename = filename.replace("'", "").replace("?", "");
  debug("DownloadingFile called '" + filename + "'");
  downloadingFileCalled = true;
  $("#history").prepend(
    '<div class="history-item-modern">' + filename + "</div>"
  );
  $(".history-item-modern").each(function (i, el) {
    if (i > 6) {
      $(el).remove();
    }
    $(el).css("opacity", "" + 1 - i * 0.15);
  });
}

var allow_increment = true;
function SetStatusChanged(status) {
  debug("SetStatusChanged called '" + status + "'");
  $("#history").prepend(
    '<div class="history-item-modern">' + status + "</div>"
  );
  $("#progress-desc").text(status); // ajout: maj du libellé sous la barre
  $(".history-item-modern").each(function (i, el) {
    if (i > 6) {
      $(el).remove();
    }
    $(el).css("opacity", "" + 1 - i * 0.15);
  });
  if (status === "Workshop Complete") {
    allow_increment = false;
    setLoad(80);
  } else if (status === "Client info sent!") {
    allow_increment = false;
    setLoad(95);
  } else if (status === "Starting Lua...") {
    setLoad(100);
  } else {
    if (allow_increment) {
      percentage = percentage + 0.1;
      setLoad(percentage);
    }
  }
}

/**
 * External Functions
 */
function loadAll() {
  $("nav").fadeIn();
  $("main").fadeIn();

  setTimeout(function () {
    debug("Checking if first time loading.. " + downloadingFileCalled);
    if (downloadingFileCalled) {
      announce(
        "This is your first time loading please wait for the files to download",
        true
      );
    }
  }, 10000);
}
function loadBackground() {
  if (Config.backgroundImage) {
    $(".background").css(
      "background-image",
      'url("images/' + Config.backgroundImage + '")'
    );
  }
}
function announce(message, ispermanent) {
  if (Config.enableAnnouncements && !permanent) {
    $("#announcement").hide();
    $("#announcement").html(message);
    $("#announcement").fadeIn();
  }
  if (ispermanent) {
    permanent = true;
  }
}
function debug(message) {
  if (Config.enableDebug) {
    console.log(message);
    $("#debug").prepend(message + "<br>");
  }
}

$(document).ready(function () {
  loadBackground();

  if (
    Config.announceMessages &&
    Config.enableAnnouncements &&
    Config.announcementLength
  ) {
    if (Config.announceMessages.length > 0) {
      var i = 0;
      setInterval(function () {
        announce(Config.announceMessages[i]);
        i++;
        if (i > Config.announceMessages.length - 1) {
          i = 0;
        }
      }, Config.announcementLength);
    }
  }

  setTimeout(function () {
    if (!isGmod) {
      debug("No Garry's mod testing..");
      isTest = true;
      loadAll();

      GameDetails(
        "Servername",
        "Serverurl",
        "Mapname",
        "Maxplayers",
        "SteamID",
        "Gamemode"
      );

      var totalTestFiles = 100;
      SetFilesTotal(totalTestFiles);

      var needed = totalTestFiles;
      setInterval(function () {
        if (needed > 0) {
          needed = needed - 1;
          SetFilesNeeded(needed);
          DownloadingFile("Filename " + needed);
        }
      }, 500);

      SetStatusChanged("Testing..");
    }
  }, 1000);
});

// Fallback initialization if jQuery is not available
if (typeof $ === 'undefined') {
  console.log('jQuery not available, using fallback initialization');
  
  // Basic fallback functions
  window.$ = function(selector) {
    if (selector === document) {
      return {
        ready: function(fn) {
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
          } else {
            fn();
          }
        }
      };
    }
    
    var elements = document.querySelectorAll(selector);
    return {
      fadeIn: function() {
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.display = 'block';
          elements[i].style.opacity = '1';
        }
        return this;
      },
      html: function(content) {
        if (content !== undefined) {
          for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = content;
          }
          return this;
        }
        return elements[0] ? elements[0].innerHTML : '';
      },
      text: function(content) {
        if (content !== undefined) {
          for (var i = 0; i < elements.length; i++) {
            elements[i].textContent = content;
          }
          return this;
        }
        return elements[0] ? elements[0].textContent : '';
      },
      css: function(prop, value) {
        for (var i = 0; i < elements.length; i++) {
          elements[i].style[prop] = value;
        }
        return this;
      },
      attr: function(attr, value) {
        if (value !== undefined) {
          for (var i = 0; i < elements.length; i++) {
            elements[i].setAttribute(attr, value);
          }
          return this;
        }
        return elements[0] ? elements[0].getAttribute(attr) : '';
      },
      prepend: function(content) {
        for (var i = 0; i < elements.length; i++) {
          elements[i].insertAdjacentHTML('afterbegin', content);
        }
        return this;
      },
      each: function(fn) {
        for (var i = 0; i < elements.length; i++) {
          fn.call(elements[i], i, elements[i]);
        }
        return this;
      },
      remove: function() {
        for (var i = 0; i < elements.length; i++) {
          if (elements[i].parentNode) {
            elements[i].parentNode.removeChild(elements[i]);
          }
        }
        return this;
      },
      hide: function() {
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.display = 'none';
        }
        return this;
      }
    };
  };
  
  // Initialize immediately
  document.addEventListener('DOMContentLoaded', function() {
    console.log('Fallback initialization starting...');
    loadBackground();
    
    // Show loading screen immediately
    loadAll();
    
    // Initialize with default values
    GameDetails("Servername", "Serverurl", "Mapname", "Maxplayers", "SteamID", "Gamemode");
    
    setTimeout(function() {
      if (!isGmod) {
        debug("No Garry's mod testing..");
        isTest = true;
        
        var totalTestFiles = 100;
        SetFilesTotal(totalTestFiles);
        
        var needed = totalTestFiles;
        var testInterval = setInterval(function () {
          if (needed > 0) {
            needed = needed - 1;
            SetFilesNeeded(needed);
            DownloadingFile("Filename " + needed);
          } else {
            clearInterval(testInterval);
          }
        }, 500);
        
        SetStatusChanged("Testing..");
      }
    }, 1000);
  });
}
