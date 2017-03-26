'use strict';
/**
 * @fileoverview Library for dealing with an interactable canvas.
 */

// Constructor for Shape objects to hold data for all drawn objects.
function Shape(e,x, y, w, h, fill) {
  // This is a very simple and unsafe constructor. All we're doing is checking if the values exist.
  this.x = x || 0;
  this.y = y || 0;
  this.w = w || 1;
  this.h = h || 1;
  this.energyLevel = e || 0;
  this.fill = fill || '#AAAAAA';
}

// Draws this shape to a given context
Shape.prototype.draw = function(ctx) {
  ctx.fillStyle = this.fill;
  ctx.fillRect(this.x, this.y, this.w, this.h);
}

// Determine if a point is inside the shape's bounds
Shape.prototype.contains = function(mx, my) {
  // All we have to do is make sure the Mouse X,Y fall in the area between
  // the shape's X and (X + Width) and its Y and (Y + Height)
  return  (this.x <= mx) && (this.x + this.w >= mx) &&
          (this.y <= my) && (this.y + this.h >= my);
}

  function CanvasState(canvas) {
    // **** First some setup! ****
    
    this.canvas = canvas;
    canvas.width = 468;
    canvas.height = 600;
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = canvas.getContext('2d');

    // This complicates things a little but but fixes mouse co-ordinate problems
    // when there's a border or padding. See getMouse for more detail
    var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
    if (document.defaultView && document.defaultView.getComputedStyle) {
      this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10)      || 0;
      this.stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10)       || 0;
      this.styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
      this.styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;
    }
    // Some pages have fixed-position bars (like the stumbleupon bar) at the top or left of the page
    // They will mess up mouse coordinates and this fixes that
    var html = document.body.parentNode;
    this.htmlTop = html.offsetTop;
    this.htmlLeft = html.offsetLeft;

    // **** Keep track of state! ****
    
    this.valid = false; // when set to false, the canvas will redraw everything
    this.shapes = [];  // the collection of things to be drawn
    this.dragging = false; // Keep track of when we are dragging
    // the current selected object. In the future we could turn this into an array for multiple selection
    this.selection = null;
    this.dragoffx = 0; // See mousedown and mousemove events for explanation
    this.dragoffy = 0;
    
    // **** events ****

    var myState = this;
    
    //fixes a problem where double clicking causes text to get selected on the canvas
    canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);
    // Up, down, and move are for dragging
    canvas.addEventListener('mousedown', function(e) {
      var mouse = myState.getMouse(e);
      var mx = mouse.x;
      var my = mouse.y;
      var shapes = myState.shapes;
      var l = shapes.length;
      myState.dragging = true;
      myState.dragoffx = mx;
      myState.dragoffy = my;
      for (var i = l-1; i >= 0; i--) {
        if (shapes[i].contains(mx, my)) {
          var mySel = shapes[i];
          // Keep track of where in the object we clicked
          // so we can move it smoothly (see mousemove)
          console.log(mySel.energyLevel);
          myState.selection = mySel;
          myState.valid = false;
          return;
        }
      }
      // havent returned means we have failed to select anything.
      // If there was an object selected, we deselect it
      if (myState.selection) {
        myState.selection = null;
        myState.valid = false;
      }
    }, true);
    canvas.addEventListener('mousemove', function(e) {
      if (myState.dragging && !myState.selection){
          var mouse = myState.getMouse(e);
          var mx = mouse.x;
          var my = mouse.y;
          var shapes = myState.shapes;
          var l = shapes.length;
            // We don't want to drag the object by its top-left corner, we want to drag it
            // from where we clicked. Thats why we saved the offset and use it here
          for (var i = l-1; i >= 0; i--) {
              var mySel = shapes[i];
              mySel.y -= myState.dragoffy-my; 
              mySel.x -= myState.dragoffx-mx;
          }
          myState.valid = false; // Something's dragging so we must redraw
          myState.dragoffx = mx;
          myState.dragoffy = my;
      }
    }, true);
    canvas.addEventListener('mouseup', function(e) {
      myState.dragging = false;
    }, true);
    // double click for making new shapes
    canvas.addEventListener('dblclick', function(e) {
      var mouse = myState.getMouse(e);
      myState.addShape(new Shape(mouse.x - 10, mouse.y - 10, 20, 20, 'rgba(0,255,0,.6)'));
    }, true);
    //canvas.addEventListener('DOMMouseScroll',handleScroll,false);
   // canvas.addEventListener('mousewheel',handleScroll,false);
    canvas.addEventListener('mousewheel',function(evt){
          var delta = evt.wheelDelta ? evt.wheelDelta/40 : evt.detail ? -evt.detail : 0;
          if (delta) {
              var mouse = myState.getMouse(evt);
              myState.zoom(delta,mouse);
          }
          return evt.preventDefault() && false;
    },false); 
    // **** Options! ****
    
    this.selectionColor = '#CC0000';
    this.selectionWidth = 5;  
    this.interval = 30;
    setInterval(function() { myState.draw(); }, myState.interval);
  }
  CanvasState.prototype.zoom = function(clicks,mouse,additionalFactor){
      additionalFactor = additionalFactor || 1;
      var scaleFactor = 1.1;
      var factor = Math.pow(scaleFactor,clicks) * additionalFactor;
      var mx = mouse.x || 0;
      var my = mouse.y || 0;
      var shapes = this.shapes;
      var l = shapes.length;
      for (var i = l-1; i >= 0; i--) {
          var mySel = shapes[i];
          mySel.y = ((mySel.y-my)*factor)+my;
          mySel.h *= factor;
          mySel.w *= factor;
          mySel.x = ((mySel.x-mx)*factor)+mx;
      }
      this.valid = false;            
  }
  CanvasState.prototype.pan = function(x,y){
      var shapes = this.shapes;
      var l = shapes.length;
        // We don't want to drag the object by its top-left corner, we want to drag it
        // from where we clicked. Thats why we saved the offset and use it here
      for (var i = l-1; i >= 0; i--) {
          var mySel = shapes[i];
          mySel.y -= this.dragoffy-y; 
          mySel.x -= this.dragoffx-x;
      }
      this.valid = false; // Something's dragging so we must redraw
  }
  CanvasState.prototype.addShape = function(shape) {
    this.shapes.push(shape);
    this.valid = false;
  }

  CanvasState.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  // While draw is called as often as the INTERVAL variable demands,
  // It only ever does something if the canvas gets invalidated by our code
  CanvasState.prototype.draw = function() {
    // if our state is invalid, redraw and validate!
    if (!this.valid) {
      var ctx = this.ctx;
      var shapes = this.shapes;
      this.clear();
      
      // ** Add stuff you want drawn in the background all the time here **
      
      // draw all shapes
      var l = shapes.length;
      for (var i = 0; i < l; i++) {
        var shape = shapes[i];
        // We can skip the drawing of elements that have moved off the screen:
        if (shape.x > this.width || shape.y > this.height ||
            shape.x + shape.w < 0 || shape.y + shape.h < 0) continue;
        shapes[i].draw(ctx);
      }
      
      // draw selection
      // right now this is just a stroke along the edge of the selected Shape
      if (this.selection != null) {
        ctx.strokeStyle = this.selectionColor;
        ctx.lineWidth = this.selectionWidth;
        var mySel = this.selection;
        ctx.strokeRect(mySel.x,mySel.y,mySel.w,mySel.h);
      }
      
      // ** Add stuff you want drawn on top all the time here **
      
      this.valid = true;
    }
  }


  // Creates an object with x and y defined, set to the mouse position relative to the state's canvas
  // If you wanna be super-correct this can be tricky, we have to worry about padding and borders
  CanvasState.prototype.getMouse = function(e) {
    var element = this.canvas, offsetX = 0, offsetY = 0, mx, my;
    
    // Compute the total offset
    if (element.offsetParent !== undefined) {
      do {
        offsetX += element.offsetLeft;
        offsetY += element.offsetTop;
      } while ((element = element.offsetParent));
    }

    // Add padding and border style widths to offset
    // Also add the <html> offsets in case there's a position:fixed bar
    offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
    offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;

    mx = e.pageX - offsetX;
    my = e.pageY - offsetY;
    
    // We return a simple javascript object (a hash) with x and y defined
    return {x: mx, y: my};
  }

module.exports.Shape = Shape;
module.exports.CanvasState = CanvasState;