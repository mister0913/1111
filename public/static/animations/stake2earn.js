;(function (cjs, an) {
  var p // shortcut to reference prototypes
  var lib = {}
  var ss = {}
  var img = {}
  lib.ssMetadata = []
  ;(lib.AnMovieClip = function () {
    this.actionFrames = []
    this.ignorePause = false
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel)
    }
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this)
    }
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel)
    }
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this)
    }
  }).prototype = p = new cjs.MovieClip()
  // symbols:
  // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed))
    clone.gotoAndStop(this.currentFrame)
    clone.paused = this.paused
    clone.framerate = this.framerate
    return clone
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip)
    prototype.clone = mc_symbol_clone
    prototype.nominalBounds = nominalBounds
    prototype.frameBounds = frameBounds
    return prototype
  }

  ;(lib.Tween4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f()
      .s('#09073C')
      .ss(5, 1, 1)
      .p(
        'AkCq0QA3BDAPAOQAOAOAKAPQALAQAXAgIBfCFQAaAkAQAUIApAtQAuA1AMA2QADARAGAHQAEAEAPAJQAQAJAVASQAcAZAHAFQAHAFAPALQAMAKAGAKQAMAVgIAWQgEAKgJAHQgJAHgLACQgHABgHAAQADACACACQAoAgAFABQAeAIASAJQACABACABQAKAFANAKAjqK1Qg0gEgogI'
      )
    this.shape.setTransform(32.35, -0.75)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f().s('#05104D').ss(5, 1, 1).p('ALAjwQAjAsAPAnAAyFqQgagGgVgHQg3gSgYgeQgwg8kNiYQj0iJh0k5')
    this.shape_1.setTransform(-5.35, 31.125)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.f('#F0EBDC').s().p('AgGACIADgDIADgBQADgBAFABQgJAFgFAAIgBABIABgCg')
    this.shape_2.setTransform(20.25, 48.925)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics.f('#948383').s().p('AgDAAIAGAAIABAAIgHAAg')
    this.shape_3.setTransform(23.675, 14.525)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics.f('#BEADA3').s().p('AAAAAIAAAAIAAAAIAAAAg')
    this.shape_4.setTransform(23.2, 14.525)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics.f('#BFACA5').s().p('AAAAAIABAAIgBAAg')
    this.shape_5.setTransform(49.05, 1.725)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics.f('#BFA49F').s().p('AANAMQgKgEgEgFQgHgDgHgKIgDgEQAGABACACQAQALAMAOIABABIgGgDg')
    this.shape_6.setTransform(78.9, 12)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics.f('#E1A0EC').s().p('AAAAEIgEgGIAJAGg')
    this.shape_7.setTransform(-2.725, 65.95)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#B7ABA9')
      .s()
      .p('AAHAJIgBgBIAGACQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgAABADIgMgNIAWAUIgKgHg')
    this.shape_8.setTransform(-45.025, 23.65)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics.f('#09073C').s().p('AAAAAIABAAIAAABIgBgBg')
    this.shape_9.setTransform(-5.75, 3.8)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#C7A1A1')
      .s()
      .p(
        'AAHHrIABAAIgBABIAAgBgADSjiQgmgLgugGQgugGgdAAQgsAAgoADQgpADgLgKQgLgLAjgNQAjgOAPgEIAggIQASgEAlABIAKAAIAdACIAaACQAvAMAPAeQAPAeAoASIgwgOgAApl7QgrgEgXgDIgrgQIgvgTIghgKIgQgGIgRgEQgKgDgggLQgfgMgDgLQgCgLAkgBIA7gBIB5ARQBuAuALACIABAAQBeAggEAyQhcgggkgDg'
      )
    this.shape_10.setTransform(12.5169, 5.875)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#F8F4E3')
      .s()
      .p(
        'ACiK2QgugCgdgEQgagGgVgHQg3gSgYgeQgwg8kNiYQj0iKh0k4QAEgGgTgIQgTgJgUgtQgTgugBgcQgBgbAqhYQAqhXAxgvQAxgwAUgbQB4hzCegWQCigYBMgUQBKgUBQAOQBRANgHgKQA4BEAOAOQAOAOAKAPIAiAvIBfCFQAaAlARATIApAuQAuA1AMA1QADARAGAHQAEAFAPAJQAQAIAVATIAjAdIAWARQAMAKAGAKQAMAVgIAVQgEALgJAGQgJAHgLACQgHABgHAAIAFAEQAoAgAFABQAeAIASAJIAEACQAKAFANAKQAiAsAPAnIgHAAIgOAAQgPgBgPABIgoAIQgXAFg5AsIhtAwQg6AbgxArQg4AxgxA2QgLAMgCAwIgBACIABAAQgCAgACAvQgrAlgZAMQgMA6gpABIgDgBgABAKmIAFAAIgLgHIAGAHgADfI2IABgBIgBAAIAAABgAlfEEQAAABAAAAQABAAABABQAAAAABAAQAAAAABAAIgFgDIABABgAllD+IAKAHIgXgUIANANgAFDCgIAJAAIgCAAIgHAAIgBAAIABAAgAAiA2IAAgCIgCAAIACACgAJFAgIABAAIgBAAgAELivQAdAAAuAGQAuAGAmALIAwANQgogSgPgeQgPgegvgMIgagBIgdgDIgKAAQglgBgSAFIghAIQgPADgjAOQgjAOALAKQALALApgDQAkgDAmAAIALAAgAgHmhQgkABACAMQADALAfALQAfAMAKACIARAEIAQAHIAhAKIAvASIArAQQAXAEAsADQAkADBcAgQAEgxheggIgBgBQgLgBhvguIh5gSIg6ABg'
      )
    this.shape_11.setTransform(-9.0632, -1.4919)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-88.1, -72.5, 168.89999999999998, 143.6)
  ;(lib.Tween3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f()
      .s('#09073C')
      .ss(4, 1, 1)
      .p(
        'AGzhoQhwAchgAgQiUBDiZA3QgSAJgVAKQg/AeguAQQiTAzizgIQgBAAgBAAQAAAAgBAAQgHAFgGAEQgfAWgOAdQgCAEgEAIQgDAHgEAEQgHAJgLADQgLADgLgDQgBAAgBAAAKXkaQAEAOgFATQgHAfgXAaQgVAYgfARQgUALgcAJQgGACgGACQgSAGguALQgJADgKAC'
      )
    this.shape.setTransform(-137.1606, -16.6932)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f().s('#05104D').ss(6, 1, 1).p('ALdhNQgCAAgCAAArYBLIgEAD')
    this.shape_1.setTransform(39.3375, 75.8)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f()
      .s('#09073C')
      .ss(5, 1, 1)
      .p(
        'AR+CSQAzAEBoAOQBWAMA1AKQAGABAFABQAvAIAqAFQAkAFA4AdQAQAIARAKQAjAUAXASQAYATAKAQADoFOQgVADgXADQATADATAEQBgARBYAZQC/A2gqEHQgGApgLAnQgEATgGASQAAABAAAAQgfBig2BcQgLAUgNASQgOAVgPAUQhgB8iVBkQgQAKgRALIgNAIAMHSRQAGgLAFgNIABgDIBPhEQgyA0gmAoQgBACgCABgAKoT0QgeAQglAHQgBACgCABQgJAHifAeQhxAWi+AgAKoT0QgZAbgBABAKoT0QA9ggAihDQhABDgfAggA5CKFQiNiMgOiUQgOiTA2hDQA1hEA0g1QAzg0AWgqIAAiGQAKhgAIguQAOhOAWg8QAfhXBGhjQBYh8BxhjQCLh6CthrQCshrCnhZQCnhZB3AiQEdAXCIDVQBrCpgHCSAoZP/IBgh0QAMgOAKgLQAsg1AGgFQAHgHANgIQAKgGAMgHQAegSAWgFQAWgGAgABQAJAAAJAAAjKMAQATgBAOgE'
      )
    this.shape_2.setTransform(-43.8441, -51.2331)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f()
      .s('#09073C')
      .ss(6, 1, 1)
      .p(
        'ABhohQgOhGg1BDQhGBcgEhLQg0BcgggKQgWgHgJgEQgSgHgLgJQgGgEgFgGQiJARhrAfQgjAKgQgBQgOgBgLgHQgMgHgEgLQgDgHABgHABhohQgBABgBACQgDAFgEAHQgGAKgIANQgMAUgIAPQgZAwAagNQAPgIAhgeIABgBQgBABAAAAQAAgHAAgGQgBgagDgSQADgHADgFQAPgjgRAZQgCAEgEAFgABjoUQAAgGgBgFQgBgBAAgBAA3m1QAIgSAJgTQABgBAAgCQAMgXAIgRQADgIADgHANEnKQASAcAcBUQAbBUgDB2QgDB2goByQgoBzgqAwQgqAxgVAkQgUAlgfAPQgeAOgHADQgIACACABQgvAAglgEQgJgCgIgBQhMgLh2gsQgKgEgKgDQhAgaghgYQgNgJgLgKQgOgNgLgPQgggZgSgdAJ8GYQgBAAgCAAQgCAAgCAAQgDAAgCAAQABAAAIAAQADAAAEgBIAJgBABxC7QgBgBgBgBIgeglQgmgyAAgBQgCgEgBgCQgQgigMgYQgGgLgEgJQgOgbgHgiQgHgnABguQABgcAEgeQAPhwA8iGABwC6QhEhXgBgDAs5IzIglATIgrAA'
      )
    this.shape_3.setTransform(48.6301, 27.2674)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics.f('#82777B').s().p('AgGAAIALAAIABAAIAAAAIABAAg')
    this.shape_4.setTransform(-7.5, 184.975)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics.f('#E20B5B').s().p('AgHgPQAUgPgEAiQAAAEgDAEQgGAIgDAAQgHAAADgjg')
    this.shape_5.setTransform(-31.4051, 153.5252)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics.f('#787B77').s().p('AgTgDQATAAATADQABAAAAAAQAAAAAAAAQAAAAAAABQAAABAAABIgHAAIgMABQgOAAgGgHg')
    this.shape_6.setTransform(-22.1, 161.1864)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics.f('#A37A8B').s().p('AgCAIQgDgJAAgKQATANgOAJIAAABQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAgBg')
    this.shape_7.setTransform(-47.2866, 126.0528)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#DEB6D0')
      .s()
      .p(
        'AgRAQQgWgKgHgaQAWAYAzgGQADgBAEgCIANgIIAAAHQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgFACgHAAIAAAGQgHAEgHACQgHABgDAEQgEAEgGAAQgHAAgKgFg'
      )
    this.shape_8.setTransform(-67.475, 106.6132)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#836D78')
      .s()
      .p('AAJARQgVgGgNgQQAPgCAJgJIABAEQABADAAAEQgCADAAACQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAQAoADgaAJIgEABIgCAAg')
    this.shape_9.setTransform(-65.5879, 101.8313)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics.f('#D7B1B7').s().p('AgSABIgDgEQARgKAaAHIgDAEIgDADQgIAJgIAAQgJAAgJgJg')
    this.shape_10.setTransform(-42.95, 123.2475)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#996C85')
      .s()
      .p('AgGADIABgRIAFAAQAAAHADAFQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIAAADIgBACQgGAKgDAAQgDAAAAgMg')
    this.shape_11.setTransform(-47.875, 122.9694)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f('#905559')
      .s()
      .p('AgBAFIgPgLIAaAAIAHAAQAAABAAABQAAAAAAABQgBABAAAAQAAAAAAAAQgGACgHAAIAAAHQgDAAgBgCg')
    this.shape_12.setTransform(-57.65, 120.125)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics.f('#927375').s().p('AgGgDIANACQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgFACgCAAQgGAAABgHg')
    this.shape_13.setTransform(-57.3717, 113.5124)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#D8799D')
      .s()
      .p(
        'AgMAcQgCgEgCABQgQAFgagDIAAgGQAGAAAGgDQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQATgFAJgOQADgEADAAQAhAAANgRQAHgGANACIAEABQgjASgWAgQgGAKgEAAQgDAAgBgDg'
      )
    this.shape_14.setTransform(-51.375, 118.0773)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics.f('#A7919C').s().p('AgMgIQADADAEACIAFACQAHAAAFABIACAEQgDAAgDACQgEADgEAAQgHAAgFgRg')
    this.shape_15.setTransform(-53.95, 114.2863)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics.f('#675354').s().p('AgBAGQgFgCgHgBIAAgGIAAgGIATAAIAHAAIgBAGIgCADQAMAKgWAAIgBgEg')
    this.shape_16.setTransform(-52.5413, 113.7)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics.f('#A77889').s().p('AgaABQARgJAdADIAHAAQgGAGgJACQgMAEgIAAQgLAAgHgGg')
    this.shape_17.setTransform(-16.7, 135.6379)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics.f('#B89D99').s().p('AgMgHQAUACAGALIgHABIgHABQgPAAADgPg')
    this.shape_18.setTransform(-14.667, 125)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#DDC5D0')
      .s()
      .p('AgNAeQgmgIAFgwQAUgNgDAoQAAADAEACQAcASAOgZQALgVAUgEIgBAHQgJAsgsAFIgCAAIgFAAg')
    this.shape_19.setTransform(-18.0738, 140.4411)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics.f('#AC96B3').s().p('AAEAKQgEAAgBgCQgIgFAAgMQAJAHAJAHQABACAAADIgGAAg')
    this.shape_20.setTransform(-35.325, 132.675)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics.f('#E090B1').s().p('AgoAHQA7AJALgpIAEgBQADADACAFIABAGQgIARgMAPQgDAEgEABQgLACgIAAQgaAAgIgUg')
    this.shape_21.setTransform(-41.75, 127.597)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics.f('#C75084').s().p('AgJAJQgCgFgDgDIAAgGQARgPAMAMIgDAEQgIALgMAIIgBgGg')
    this.shape_22.setTransform(-36.825, 124.7882)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics.f('#D59CB6').s().p('AgWAOQgCgCAAgDIAAgHQAPgVAiAFIgDACQgbAIgNAUQgDAAgBgCg')
    this.shape_23.setTransform(-22.95, 131.4287)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics.f('#D2B9C8').s().p('AgBAFIgHgMQAdADgTAMIAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBg')
    this.shape_24.setTransform(-28.6316, 131.1278)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#DAABB4')
      .s()
      .p('AADAXQgmgEgPgcIAHAAQAfAaAfgYQALgJAOgGQAAADACACQABABAEAAQgHAOgKAJQgEADgBADQgHAKgOAAIgFAAg')
    this.shape_25.setTransform(-29.875, 134.6893)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics.f('#A27D85').s().p('AgLAQQgIgFgHgHQAOgFALgKQAPgOANARQgEAAgBACQgLAHgRADIAAAHIAAAHQgDAAgCgCg')
    this.shape_26.setTransform(-26.85, 127.8037)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f('#BCA4B1')
      .s()
      .p('AgXAHIAAgHQASgCAKgJQABgCAEABIAHAAIAHAAQAAAAgBABQAAABAAAAQAAABAAAAQAAAAAAAAQgZAJgVANIAAgGg')
    this.shape_27.setTransform(-25.15, 128.25)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics.f('#AE959E').s().p('AAfADIhDAAIAAgFQAkAAAlACIAAADIgGAAg')
    this.shape_28.setTransform(-17.725, 126.575)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics.f('#746678').s().p('AgWgDQAWgBAXAEIAAACIgGABIgPABQgQAAgIgHg')
    this.shape_29.setTransform(-38.7, 111.7602)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f('#9B988E')
      .s()
      .p('Ag8AKIAAgHQAmAEATgNQADgEAGACQAZAFAeAAQAAABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQgxAKg4AAIgPAAg')
    this.shape_30.setTransform(-39.7, 120.5362)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f('#E7DAD3')
      .s()
      .p(
        'AinArQAWgWAfgPQAAAAAAAAQAAAAAAgBQAAAAABgBQAAgBAAgBQBOgNBNALIAhAFIAOACQAZAEAFgVQAAgEADgEQAOgTgUgOQACgWAgAGQAWAEgEAZQgBAEgEADQgQAPgKASQgQAdAdAFQAUALgPAFQgCABgEgCQgQgJgSAEIgGAAQgRgDgRAAIAAgEQgXgDgYAAIgHAAQg1AAgpAOIgGAAIgVAAIAAAGIAAAHIgGgBQgEgCgDgEIgHAAIgHAAIgOgCIABgEQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAAAAAIgBABQgJARgFAAQgHAAgBgag'
      )
    this.shape_31.setTransform(-43.8618, 107.7042)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f('#E3D7D6')
      .s()
      .p(
        'AiSBTQAYgeAhgUQAMgIAQgFQARgGAUgCIAHAAIBJgBQAWAAAIAIIACABQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAIABgBQAEgEgDgGQgJgWAFgmQgMgZAVgNQAFgDAGAAQAkgCABAdQABADgDAEQgLANgGAPIgIAUIgGAKQAAABAAAAQgBAAAAAAQgBAAAAABQgBAAgBAAIgBASIgEAQQgCALAOgBIAIABQAZAJgoAAIgiAAIAAgEQglgDglAAIAAAHIgGAAIgHAAIgGAAIgHAAQgOgRgQAOQgLAKgNAGIgOAAQgXgCgHAMQgKAOgGAAQgFAAgDgKgABNAsIAGgCQgFgLgWgCQgDAUAYgFg'
      )
    this.shape_32.setTransform(-21.6214, 121.3351)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f('#E4DAD3')
      .s()
      .p(
        'AiQBQQgDgGAAgGIAAgHQARgiAsgJIAIgCQBEgQBCALIAoAFIAGAAQARgCgNgLQgDgDgBgGIgGgoQAEg3AlAiQAQAOgNAQQgOARgFAaIgBAHQACAPAPAGQAZAVgggEIgHgBQhGgGg5AKQgeAAgZgFQgGgCgFAEQgSAOgmgEIAAAHIgHAAIgHAAIAAAGIAAAHQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg'
      )
    this.shape_33.setTransform(-33.0719, 114.7256)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics.f('#C63179').s().p('AgJgIIAHAAQAFAEAFAEQACACAAADIAAADQgOgCgFgOg')
    this.shape_34.setTransform(-124.025, 112.2)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics.f('#D4CAD1').s().p('AgXAAIAAgHQAXAAARAHQAQAFgXABIgGABIgJABQgNAAgFgIg')
    this.shape_35.setTransform(-106.4425, 103.2999)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics.f('#7F6D60').s().p('AgKADQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAgGQAdANgIAAQgEAAgQgEg')
    this.shape_36.setTransform(-101.5499, 95.8347)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f('#C2B7B5')
      .s()
      .p(
        'AAYBWQAXAAgQgHQgRgHgXABIAAAGIgNgBIgOgFQglgOgggSQgsgYAFhIQAQgPAHgZQAAAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQAHAEACAFQABABAAAEQgGA1AYAbQAnApA9ATQAfAKAfAHQASAEAVAAIAiAAQgfAQgyACIgFAAQgZAAgLgLg'
      )
    this.shape_37.setTransform(-107.8003, 95.279)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics.f('#94877F').s().p('AADAVQgKgQADgdQALAWgBAcg')
    this.shape_38.setTransform(-106.9632, 63.75)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics.f('#9E908B').s().p('AgIgEIAAgGQAKAAgBgPIADAAQAEAEAAADIAAAHQACAOgCATIAAAEQgCgWgOgIg')
    this.shape_39.setTransform(-105.1875, 57.65)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics.f('#BFBDBA').s().p('AgIgEIAAgHQAEgDAEgCQACgCADAAQAIAJgKAXIgBAFQABgTgLgEg')
    this.shape_40.setTransform(-35.4722, 96.275)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics.f('#C5B6B8').s().p('AgCABIAEgDQABACgDACIgBABIgBgCg')
    this.shape_41.setTransform(-37.0964, 86.775)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics.f('#FE1258').s().p('AgOgBQA6ADg6AAg')
    this.shape_42.setTransform(-54.5, 93.225)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f('#E1DCD4')
      .s()
      .p(
        'ABZA1Qg3gRhKACQg2ACgogKQgBgEgBgDIgCgEQgJAJgOACQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQgDgIAAgLQA4AFAogHQAXgFAYgCIAHAAQAjgCAfADQBDAIALg0QAAgEADgEQANgLARAPQAFADAFADQAAAAABAAQAAABAAAAQAAABAAAAQABABAAABQgEAAgDABQgEACgEAEIAAAGQgFAPgFARQgEAUgKAQQgGAMgQABQgJAAgLgEg'
      )
    this.shape_43.setTransform(-51.9, 98.2009)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics.f('#C4B1A4').s().p('AAHgFIAAAGIgDADIgKACIANgLg')
    this.shape_44.setTransform(-173.85, -6.5625)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f('#F1EAD9')
      .s()
      .p(
        'AkdCLIAAgHIATgVQAPgRAFgDQAIgFAPgGQAagJAZgHIA0gOQAggJAUgIQAOgFAGgGQALgKgEgMQgBgDgEgFIgHgJQgDgMgEgFQgIgNgaAGQgPACgSAFIgkAJQhDAQggAEQgfADgtgBIg1gBQAWgJAQgRIAWgKIAJgCIBAgZQAqgRAXgHIAYgIQDRgaCJgPIB2ADQAwAAAxgFIgbAIQgwAQgWAFIggAHQgiAIgnAYQgYAOgsAgIggAYIhhAsQhYAqg0AUQhKAchCANIACgEg'
      )
    this.shape_45.setTransform(-144.6, -20.4375)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f('#C7A1A1')
      .s()
      .p(
        'AqBG5IgCAAQgUgGgMgUQgJgQgDgbQgEg7AdguQAKgPALgNQAJgiARgXQAZggAqgQIAYgHIAAgCIAFABIAJgCQAOgHAeAAIAVAAIA2ACQAsABAfgDQAggEBDgQIAkgJQASgFAPgDQAagFAJAMQADAFADAMIAHAJQAEAGABAEQAEALgKAKQgHAHgNAEQgVAJgfAIIg1AOQgYAHgbAKQgPAFgHAFQgGAEgPAQIgTAWIgNANIALgCQBDgNBJgdQA1gUBYgpIBggtIAhgYQArggAYgPQAngXAjgJIAfgHQAXgFAvgOIAbgJQgwAFgxAAIh2gDQiIAPjRAaIgZAHQgWAIgqARIhBAYIgJADIgWAKIAKgLIgCgBQgMgHAFgTQAHgVAWgQIAGgDIABgGQBCgcBQgUIAQgFIAFgBIBRgSQAVgFAUgIQATgHAcgCIAIgBQBSgVBqACID7AGIAHABQBAADA5gHQgIgGgKgDQgKgDgKAAIgBAAIgBgBQgrgEgigKIgTgEQgqgJgXgHQgjgNgWgUQgNgLgYgiIgDgEIgbgTIgwghQgRgLgRgJQgZgNAMgQQAQgWAuAGIAoAFIAHACQBRAWAzAzIAVAUQASAPAVAMIAyAdIgYgYQgOgOgDgHQgHgMgBgeQgCgtAJgXIALgUQAHgNACgIIAEgQQADgJAEgFIAEgEIAAgEQAAgMAKgCQAIgCAGAHIAGAJIABABIAAAMQANANACARQABAMAIAEIAGAMIAAANQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAHAFAAAMIAIADIAAABQAEABAEADIAIAMIALARIABACIAAACIACABIARATIAFAGIAUAVIABABQAUA4AEAFQAEAGAPAHIAWAMIACAFQAFAKgEAJIgCAEQADAOgEATQgHAfgYAaQgVAYgeAQQgUALgcAJIgNAEQgRAGguALIgTAFIgDABQhvAchhAgQiBAqhoAxIhEAgIgmATQg/AeguAQQiUAziygIIgCAAIgBAAIgOAJQgfAWgOAdIgFAMIgHALQgHAJgLADQgGABgGAAIgKgBgAlugiIAKhhIAJgKIABAAIAKgFQAWgLAFACQAQAGALgEQAMgEANAAQAtAAAlgDIAHAAQAkADAmAAQgGAVgcACIgIACQhHAchAAiQg3AfgsApIAEgkg'
      )
    this.shape_46.setTransform(-139.2354, -32.6814)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f('#F8F4E3')
      .s()
      .p(
        'Av3LYQgOiUA2hDQA2hDAzg1QA0g2AVgpIAAiHQALhfAIgvQANhNAWg7QAghYBFhiQBYh8ByhkQCLh5CshrQCshrCnhZQCmhZB4AhQEeAYCHDVQBsCpgHCRQgigTgigPIgBgEIgpAAIgSgMQiSgUh8ArQg6AwhgAtIgFABIgMASQgjAPgXAkQgIAMgQgEQgYAsgPApQgEAMgQgDQhECRAVCgQAPgEgDAQQgCAPAOACIAAALIgCgBIgFgJQgGgHgIACQgLACAAAMIAAAEIgEAEQgEAFgCAJIgEAQQgDAIgHANIgKAUQgJAXACAtQABAeAGAMQAEAHANAOIAYAYIgygdQgUgMgSgPIgWgUQgygzhRgWIgIgCIgngFQgtgGgQAWQgNAQAZANQASAJAQALIAvAhIAcATIADAEQAYAiAMALQAWAUAkANQAWAHArAJIATAEQAhAKArAEIACABIAAAAQALAAAJADQAKADAJAGQg5AHhBgDIgHgBIj5gGQhrgChSAVIgIABQgcACgTAHQgUAIgVAFIhSASIgFABIgQAFQhPAUhDAdIgBAGIgGADQgWAQgGAVQgFATAMAHIABABIgJALQgQAQgWAJIgWAAQgeAAgNAHIgKABIgEAAIgBACIgYAHQgqAQgYAgQgRAXgJAiQgMAMgJAQQgdAuAEA7QADAbAJAQQALAUAVAGIgBADIgEAPQiOiMgOiTgAo4GoIgJBhIgEAlQArgqA4gfQA/giBIgcIAIgCQAbgCAGgVQglAAglgDIgHAAQglADgsAAQgOAAgMAEQgKAEgRgGQgFgCgWALIgKAFIAAAAIgKAKgAFsEQIAEABIAMASIgQgTgAFoELIgLgRIgIgMQgDgDgEgBIgBgBQAKAEAHAHIAMATIAAAGIgCgCgAE0C7IAGABIAAALIgGgMg'
      )
    this.shape_47.setTransform(-118.0977, -88.2581)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics.f('#B7437B').s().p('AghAKQAYgJARgPQACgCADAAIAOAAIAHAAQgIAMgOAFIgJAGQgJAKgKAAQgIAAgJgHg')
    this.shape_48.setTransform(97.775, 109.6358)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics.f('#DFD5D9').s().p('AgKAIQgDgFAAgGIAAgNQAlAEgOAUQgFAJgFAAQgFAAgFgJg')
    this.shape_49.setTransform(93.7519, 106.275)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics.f('#A17B83').s().p('AgTgCIAgAAIAHAAQAAAAAAABQAAABAAAAQAAAAAAAAQAAAAgBAAQgLADgIAAQgMAAgHgFg')
    this.shape_50.setTransform(114.7, 117.7891)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f('#E4DBD3')
      .s()
      .p('AAoAYIgGAAIgHAAIghAAIgGgCQgdgKgFgjQAzACAYAdQACACADAAQgBALAOgBIAAAEIgHAAg')
    this.shape_51.setTransform(113.35, 115.075)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics.f('#A37A90').s().p('AACAEQgOAAABgJQAigGgQAQQgCACgDAAg')
    this.shape_52.setTransform(117.9361, 116.7078)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics.f('#A98C98').s().p('AgNgDQANgEANAAIAAAEIAAAFQgCAAgDACQgGAEgDAAQgIAAgEgLg')
    this.shape_53.setTransform(118.75, 113.1484)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics.f('#8C8595').s().p('AAHAEQgIgDgKAAIAAgGQAagHgDATIgEABQAAgBAAgBQAAgBAAAAQAAAAgBgBQAAAAAAAAg')
    this.shape_54.setTransform(110.5004, 108.5343)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f('#ECDAD5')
      .s()
      .p('AgkADQAWgIAYgEIAHgBQAKAAAJADQABAAAAAAQAAABAAAAQAAAAAAABQAAABAAABQgDAAgCABQgQAKgZABIgHABIgIABQgKAAgCgIg')
    this.shape_55.setTransform(107.575, 109.7422)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f('#E2B9AD')
      .s()
      .p(
        'AgWAEQALgCAEgJQABAAAAgBQAAAAABAAQAAAAABAAQABAAABAAQACAKARgDIAHgBQAAABgBABQAAAAAAAAQAAABAAAAQAAAAAAAAQgQAIgMAAQgKAAgHgFg'
      )
    this.shape_56.setTransform(104.2, 110.917)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f('#CC739D')
      .s()
      .p('AgPAKIgPAAIAAgHQAKgJASgDIAGAAQACAKASgDIAHAAQAAABgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgUAHgTADIgGAAg')
    this.shape_57.setTransform(102.15, 106.925)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics.f('#90858B').s().p('AgTgDQATAAAUADIAAADIgGAAIgNABQgOAAgGgHg')
    this.shape_58.setTransform(118.775, 106.3364)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f('#ECE0DC')
      .s()
      .p(
        'AhIALQgFgFgFgCQgWgIgDgXQAugCAeAMQAIADALAAIAuAAQAiAAAhgDIAEAAQADADAAAHIgGAAIgOAAIAAAHQg/ADgtAVQgLAEgJAAQgSAAgOgRg'
      )
    this.shape_59.setTransform(103.175, 101.9664)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics.f('#A5A1AB').s().p('AgIAJQAMgIAEgPIAAAEQAEAZgJAAQgEAAgHgGg')
    this.shape_60.setTransform(120.3781, 100.3222)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics.f('#F5F9FA').s().p('AgOAHQAOgGAIgMQAAAAAAgBQAAAAABAAQABAAAAAAQABAAABAAIADAAQgFAUgYAGIAAgHg')
    this.shape_61.setTransform(139.925, 131.65)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f('#C95777')
      .s()
      .p('AAAADQgNABAAgKIAHAAIAGAAIAHAGIAHAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgFADgHAAg')
    this.shape_62.setTransform(130.2741, 119.475)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics.f('#E7A5B7').s().p('AgIAAIAAgGIAHAAQACAAADACQAOAIgaADIAAgHg')
    this.shape_63.setTransform(126.4283, 124.225)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f('#E16891')
      .s()
      .p('AgXAQIAEAAIgBgCQgDgPAAgXQAEAAACgBQABgCAAgDQARAWAVATIACADIAAACIgHAAIAAAHIAAAHIgHAAIgKABQgSAAgFgPg')
    this.shape_64.setTransform(123.825, 121.919)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics.f('#E596B7').s().p('AADAaIAAgDIgBgDQgOgMADgdQANgBAGgDIAAAEQABADgCACQgCACgEgBQABAWADAQIAAADg')
    this.shape_65.setTransform(121.1, 121)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics.f('#907079').s().p('AgQACIAAgGIAaAAIAHAAQAAAEgBABIgDAEQgIgHgVAEg')
    this.shape_66.setTransform(123.15, 112.5)

    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f('#967D8D')
      .s()
      .p('AgTgBQAEAAABgCQACgCAAgDIAAgHIAHAAQgBALAOgBQAWgDgRAEQgMADgFAHQgHAKgEAAQgFAAABgRg')
    this.shape_67.setTransform(121.4473, 114.277)

    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f('#D32152')
      .s()
      .p('AgTAEIAAgFIAAgHQAOgDAGgDIAGgBQAHADAFAGQABABAAAEIgGAAIgHAAQgBAKAOgBIAAADIgGABQgKAEgGAAQgOAAgDgMg')
    this.shape_68.setTransform(128.225, 119.0286)

    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics
      .f('#C2557B')
      .s()
      .p('AgHAPQgJgMgHgMQAaADAPgJIAFgBIAAAHIAAAHIgFABQgHABgOADIAAAHIAAAHQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg')
    this.shape_69.setTransform(126.55, 117.775)

    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics.f('#ABACC2').s().p('AgIgFQAjADgdAIIgDAAQgHAAAEgLg')
    this.shape_70.setTransform(130.5371, 106.5184)

    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics.f('#7F7B81').s().p('AApADIhYAAIAAgFQAvgBAvADIABADIgHAAg')
    this.shape_71.setTransform(128.25, 108.9719)

    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics.f('#A38F8C').s().p('AgQgCIAaAAIAHAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgQADgQAAIAAgFg')
    this.shape_72.setTransform(132.65, 111.6625)

    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics
      .f('#F1E2E3')
      .s()
      .p(
        'AgkASIgHAAIAAgEQgNAAgOAEQgDAAgDgCQgUgJgOgPQAngMA4AFIAGAAIBXAAIAHAAIAHAAIAHAAQAWAIgRAKQgCABgDAAIgHAAIgbAAIAAAHIgHAAIg2AAIgGAAIgbAAIAAAHIgHAAg'
      )
    this.shape_73.setTransform(124.4786, 110.9367)

    this.shape_74 = new cjs.Shape()
    this.shape_74.graphics.f('#E0DBDE').s().p('AgEAsIgBgGQgHgngGgqQAogDgDAlQAAADgCAFQgLAUgEAZIgGAAg')
    this.shape_74.setTransform(134.1853, 104.8886)

    this.shape_75 = new cjs.Shape()
    this.shape_75.graphics
      .f('#E04E76')
      .s()
      .p('AgGAYIgHAAQAFgMAVgBIAHgBQgCgOgYgCQgcgCgUgOQAhgCAVAJQAOAIATAEQAfAHgOARQgDADgHAAIguAAg')
    this.shape_75.setTransform(154.706, 118.4326)

    this.shape_76 = new cjs.Shape()
    this.shape_76.graphics.f('#D1C5CC').s().p('AAhApQgsgggZg0QBEAQAFBHg')
    this.shape_76.setTransform(151.625, 110.3)

    this.shape_77 = new cjs.Shape()
    this.shape_77.graphics
      .f('#E9D3CD')
      .s()
      .p(
        'AhJAmIgHgGQAAgDgCgCQgFgFgHgDIAAgHIAAgHQAngSAxgMIAVgGQAsgMAdAIQASAPgfACQgEAAgEACIhBAgQgNAHgUAGIgRAGQgIAEgKAAIgHgBg'
      )
    this.shape_77.setTransform(138.3773, 115.565)

    this.shape_78 = new cjs.Shape()
    this.shape_78.graphics.f('#D8D3DC').s().p('AgTAYQgEgDAAgHIAAgaQAHgKAKgHQAEgEAFADQAjAQgZAeIgGAIQgHAIgFAAQgHAAgHgIg')
    this.shape_78.setTransform(142.1002, 106.5729)

    this.shape_79 = new cjs.Shape()
    this.shape_79.graphics.f('#96838C').s().p('AgEADIARgKIgCACQgJAJgPAFIAJgGg')
    this.shape_79.setTransform(39.55, 178.05)

    this.shape_80 = new cjs.Shape()
    this.shape_80.graphics
      .f('#E8D6D2')
      .s()
      .p('AhuAsQgLgCAEgSQAtgcA5gRQAfgKAjgHIAIgCQAlgJAKAUQAeAKglAEQghADgXAMIgRAHQgTAHgQAKQgRAKgXAEIgHgBQgegDgRAKIgHAAg')
    this.shape_80.setTransform(-8.9616, 131.2853)

    this.shape_81 = new cjs.Shape()
    this.shape_81.graphics
      .f('#F7F4E3')
      .s()
      .p(
        'AHtD+IggAAIgFAAIghgBIgIAAIgNAAIgagBIgJAAIgBAAIAAAAIgCAAIgLAAIAOAAQgkACgpAAQi9AAgrgHQgXgEgXgHIgIgCIgCAAQgfABgSgMQgcgTgDg5QgDg+AYggQAUgbAlgLIAPgDIARgCQAjgGAtADQApADAoAAQAJAMAZgFIAHAAQCfAACfgEIAHAAQBYgKBJgYQAhgLAfgPQARgIALgOQAMgRAGAJQAbAZAMAnQAZApADAyQABAZgGASQgIAUgTARIgVAQIgSAMIgJAFIgJAFQgEAHgEgDQghASgXAHIgtAKIg8APQgVAEhYAAIglAAgAFvD8gAhuC4QgEgBgDgEQhOgNhIgTQhJgThLgRQgegGgYgOIgHAAIgbgHQhOgQhGgaIgJgCQhUgUhAgkIgHgBQgfgFgJgcIgHABQgSADAEgRQgBAAAAAAQgBgBgBAAQAAAAAAAAQgBAAAAgBQgIgNgBgTQAKAKAQAGQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAABQADADAEACIAGACQAbAKAWAPQACACAEAAQBEAdBKAWIBQAZQATAGAXAFQASAFAQAIQAaAIAiACQAEABAEACQANALAbAAQADAAAEADQAKABAJADQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQAiADAbAKIAHABQAKAAAJADQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAABQAkABAaALQACABAEAAIBDARQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAbgHAEAUQACAPAAANgAh2BlQgQgDgRAAQgPgJgTgEIgpgHQgbgHgbgEQgdgEgSgMIgHgBQg4gShCgIQgDAAgDgCQgOgFgOgHIgGgBIh6ggQgXgEgTgGQgXgGgRgLIgGAAQgEAAgDgBIhmguQgDAAgDgCQgUgJgOgQQgEAAgDgCQgMgEgCgPQgGAAgHgCQgEgBAAgEQgDgyAAgzQADAAACACQACABAAAEQAUAKATAMQAgASAeAVQApAKAjAOIBJAeQAlAOAsAJIAIACQBQAXBSAUQCgAoCoAeIgBAEQgEAKgMADQgbAegKAvgAFWgkIAHAAIAAgHIAAgOQAhhEBSgWIAIgDQBGggBigBQA1gBAfAWQAgAXAbAcQACArgkAIIAAADQhuAriUAFIgGAAIgpAAQgYAAgXADIgRACQglAAgBggg'
      )
    this.shape_81.setTransform(-43.4641, 159.7839)

    this.shape_82 = new cjs.Shape()
    this.shape_82.graphics
      .f('#E2D4CE')
      .s()
      .p(
        'AAiAHQgFgJgHgGQgSgRgYARIgFAEQgOAMgVAFQggAJgCgWIAQgIQAWgOANgWQAEgGAGgDQAcgPAaAPQAfAQAUAaIADADQASAaACArQgogSgVgkg'
      )
    this.shape_82.setTransform(2.95, 124.1625)

    this.shape_83 = new cjs.Shape()
    this.shape_83.graphics.f('#D74977').s().p('AAJgDIACAAIgVAHQAHgGAMgBg')
    this.shape_83.setTransform(61.6, 92.7)

    this.shape_84 = new cjs.Shape()
    this.shape_84.graphics
      .f('#6B6478')
      .s()
      .p('AgCAXQgEgXAAgXQAGAAAFADQABAAAAAAQAAABAAAAQABABAAABQAAAAAAABIgHAAIAAAhIAAAHIgCgBg')
    this.shape_84.setTransform(33.425, 80.525)

    this.shape_85 = new cjs.Shape()
    this.shape_85.graphics.f('#B19BA9').s().p('AgEgCIAGAAIADAFIgJgFg')
    this.shape_85.setTransform(56.25, 44.6125)

    this.shape_86 = new cjs.Shape()
    this.shape_86.graphics.f('#94939F').s().p('AAEAJQgGgEgHgBIAAgCQALgVAHAVIABAHIgGAAg')
    this.shape_86.setTransform(55.425, 43.4062)

    this.shape_87 = new cjs.Shape()
    this.shape_87.graphics
      .f('#263582')
      .s()
      .p(
        'AqoKXIAAAAQgSABgdgFQg5gJgngNQgzgPglgZQgJgFgoggIhXhIQgxgrghgkQhWhkgMhlQgCgOABgMIgKgoQgPg7gGgtQgLhWALhIQgDgRACgKQAFgSARgHIABgBIADgBQARgGAPAJQACAIAFAMQASAlAjA0IATAgQgEAEgCAIIgSAvIgBAFQgIAZgDARQgCALAAAUIgBgBIgCgCIADAJIgBANQABBDASAoQACAGAFAGQAGAFAHgBQAGgBAEgJQACgEAAgKIAAhIQAAgUAEgJQACgGAHgMQAIgLACgHQACgMADgGIAGgIQAMAMALAOIAWAJQAQAQASAHQAYALArAAIApAAQgJAwABAfQAAAHABADQAFAIAIAAQAJABAEgJIACgHQADgNAIgVIADgKQAEgJAGgJIADgGIAAgEIADgDIAPAEIACAAIAFACQAcAIAhADQANABALgBIgBAHQgDAQABAgQAAAOABAEIAFAMIAEASQADAMAHADQAEADAFgCQAFgBADgEQAEgFAAgNQgBgPAEgpQABgQAEgKIAGgMQADgHgCgGQALgDAEgDIABgBIARgDQAPgEAdAGQAdAGAZgEIA4AHIAMABIgCAEIACAEQADAJgDAWQgLBDAEBHIABAOIADAFQADAJgGALIgPAPQgWATgQAVIAAADIgCgBIgBACIgHAOQgSAmgHAUIgGASQgDAUAAAYIAABHQAAAXgKAJQgIAIgTABIgLABQgXAAgagFgApvJyIAAAAIAAgBIAAABgAHFHoIAAgCIADgLIABgGIASg8QCVhkBgh8IAegpQANgSALgUQA6hMAahxIAAgBIALglQAhgyADgdQAEghgBgUQAAgUAEgOQADgOBxgEQBwgDALAEQA2gCAGASQAEAMAKAUIAYApQAfAygtgGIgDAAQAHAiAOAcIAKAUQAOAng+BWQg5BQgtB2IgBADIgLAYIheBjQgeAQglAHIgEADQgJAHieAeQhxAWi+AgIgIACIgEAJIgBAAIAAAAIAAAAgATQirQgHggAAglIAAgQIAAAQQAAAlAHAggAPvFoIAAAAgARNEFQghBDg9AgIBehjgARNEFIAAAAgArUBoQABgJAHgNIAGgLQAFgKAFgIIAGgJIAFgLIAMgWIAIgNIAFgHQAFgFAHABQAHACAEAGQAEAGgDAIIgHAOIgHALQgFAGgBAEIgEAMIgEAGIgBAHIABAKIACAJIgBAIIgQADIgcAIIgNADIAAgGgAtEBhQgZgFgMgBIgBAAIABgEIAEgFIAMgNQAHgGAEgIIAEgHQAFgJAJgCQALgCAFAJIACAIIgBAGIgGAKIgEAKIgBAHIgDAFIgBAFIgBAEgAwZAEIgyhKIACgBQAfgdARgMIAWgOIABgCQAYgQANgLQARgNAHgDQAHgCAIACQAHACADAHQAEAHgFALQgEAGgJAIQhKBFgSBHIgDgGgANThUQgEgEAPgWIACgEIAFgHIgLAlIgEABIgDgBgANlh5IAAAAgAs2kJQABgSAFgQQA3hVBFg2IhZAdIgxAPIgJADQgUADgYAJIgrAUQgmASgRAOIgtAvQgGAHgFADIgCAAIgCAAIgJgHIgFgIQgCgFAAgHIAAgDIADgKQAMgZATgXIhcAJIgJABQgMABgHgCQgKgDgDgHQgDgFACgGIABgDIACgCQCyAICTg0QAugQA/geIAngSQCbg3CThFQBhgfBvgdIAAABQAAAMgSAMIghATQgTALgMAJQgRAPgRAZQgRAPgOAQQgNANgiAqIgPATIgEgFQgEgGABgIQAAgLAJgPIAdg7QgmATgUANQggAUgTAWQgGAJgGAFIgEAAQgGgBgHgDIgLgGIgHgDIAAgFIgFAEQgOgCgRAEQgOAEgZAPQguAdhSBFQgyAqgZAaQgWAYgQAXQgCgEABgHg'
      )
    this.shape_87.setTransform(-76.4862, 39.5661)

    this.shape_88 = new cjs.Shape()
    this.shape_88.graphics
      .f('#E6E0E4')
      .s()
      .p(
        'Ah8AyQA5gVBOAAQAoABAogHQABAAADgFQAQgegagSQgBgrAhAZQALAIgFAXIgCAIQgPAfAIAbIACAEQgbAEgfAAIAAgEQgUgDgUAAIgHAAIhsAHIgGAAIgJABQgKAAgCgIg'
      )
    this.shape_88.setTransform(114.9781, 100.9171)

    this.shape_89 = new cjs.Shape()
    this.shape_89.graphics
      .f('#C18BA7')
      .s()
      .p(
        'AgeArIAAgGIAOAAIAHAAQAQgLAAgdIAAgHQgBgDgDgEIAAgGIAAgVQALAHAGAMQAAABAAAAQAAAAABAAQAAABABAAQABAAAAAAQABADACACQABABADAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgGADQAHA3grAAIgRgCg'
      )
    this.shape_89.setTransform(115.05, 97.5296)

    this.shape_90 = new cjs.Shape()
    this.shape_90.graphics
      .f('#877E84')
      .s()
      .p('AgCAJQgDgJAAgJIAGAAQAHAHgDALQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBg')
    this.shape_90.setTransform(116.6224, 90.675)

    this.shape_91 = new cjs.Shape()
    this.shape_91.graphics
      .f('#DFD6D9')
      .s()
      .p(
        'AgFAgQgCgCAAgDQAAgDgCgDQgGgJABgSQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAgBQADgMgHgHIAAgHQAyAagkAkQAAABAAAEQgEAAgBgCg'
      )
    this.shape_91.setTransform(118.2308, 92.375)

    this.shape_92 = new cjs.Shape()
    this.shape_92.graphics.f('#927580').s().p('AgQgCIAaAAIAHAAQAAAAAAABQAAABAAAAQAAAAgBAAQAAAAAAAAQgQAEgQAAIAAgGg')
    this.shape_92.setTransform(98.8, 94.75)

    this.shape_93 = new cjs.Shape()
    this.shape_93.graphics.f('#9F808C').s().p('AgQgGQAKgIARAHQADABADAAIgOALQgIAGgFAAQgIAAACgRg')
    this.shape_93.setTransform(87.9145, 97.1318)

    this.shape_94 = new cjs.Shape()
    this.shape_94.graphics
      .f('#E9E1D3')
      .s()
      .p(
        'AhmBAQgSgGgKAIIgDgBQgDgXgHgRQAvAAAjgJQATgEAUgCIAbgCQA1gBAZgZQANgOAIgSQAGgMALgDQACAAAEADQAgARgdAbIgHAHQgUAWgVAZQgKAMgbgBIghgCIgHAAIgaAAIAAAHIgHABQgdAKgnADQgDAAgDgCg'
      )
    this.shape_94.setTransform(99.3087, 89.8714)

    this.shape_95 = new cjs.Shape()
    this.shape_95.graphics
      .f('#D11860')
      .s()
      .p(
        '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'
      )
    this.shape_95.setTransform(12.1, 116.671)

    this.shape_96 = new cjs.Shape()
    this.shape_96.graphics
      .f('#EAE0D1')
      .s()
      .p(
        'AsrETQgVAAgTgEQgegHgggKQg9gTgngrQgYgaAFg1QABgEgBgBQgDgGgHgDIAAgHIAAgHQANgKAJAQQAvBSBlAbQAAABAAABQAAABAAAAQAAABABAAQAAAAAAAAQAsANgtgXQhCgkgjhDQgUgoAGhCQAPgCACgPIACADQBEBYBtAvQg2gwgsg5IgHgHQgOgQgLgTQgSgeAJg0IABgIQAGgYALgQIAFgIIABgGQAPAJACAWIAAgEQACgTgCgPIAAgGQAAgEgEgDIAAgHIAAgHQANgHAEgQIACAEQAeBJAxA0QAxA1A7ApQAsAeA3AWIAIADIAwATIASAGQAWAGgIAFQgoARgjAWQgTAMgigEQgigDgcgHQgVgFARALQALAIAOADQARAQAeAHQABAAABABQAAAAABAAQAAABAAAAQABABgBAAQgCAQgNAIQgSALgRAOQgyApg6AhIgiAAgAuQhhIADAEQABgdgMgWQgDAfALAQgAPkgoQgNgCgbgGQg4gMgagKQgPgFgYgMQgYgLgLgHQgUgLgRgQQgdghgSgNIgUgPIgPgTIgOgSQgEgJABgKQACgKAHgHQAHgGAKgCQAKgBAJAEQAIAFANARQAJALAUATQAtArAaARQA1AkBTAQIAkAFQAUADAIAGIAGAFQAHAIgBAMQgBAQgNAIQgHAEgOAAIgLAAg'
      )
    this.shape_96.setTransform(-15.3965, 75.7063)

    this.shape_97 = new cjs.Shape()
    this.shape_97.graphics
      .f('#AA939C')
      .s()
      .p(
        'Aj0DjIgHgBQhfgKgvg2IAAgHIAAghIAHAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQAmBEBWATIAEgEQgTgFgHgSQgBgEgEgDQgzgrAEhkIAAgGQAMAFAKANQAPATATAOIAJAGQAnAdA0APQgygigjgyQgUgcADgxQgEgPAKAEQALAEAGAMQAKARANAMQAeAcAmAVQAsAWA1AOIALAFQAPAKAbACQAXABARALQgCALgTgDQgMgCgMAFQgUAHgkgBIgDAAQAaAIAgACQAPAEAKAKIAEADQgOAPgUAMQgmAWguAMQgnAKguAAQgYAAgagDgAA8BJQg5gDgugNIgfgJQhbgcglg6QgQgagHgmQgFgagCgsQgBgcAHgLQAFgJAKgFQAKgEAKABIAIAAQAHACAHADIAJAHIAGAGQAGAGAHANIALAUQAKASAXAbQBKBHBrAmQhTgQg0gjQgagRgtgrQgUgUgJgLQgNgRgIgEQgJgFgKACQgKABgHAHQgHAGgCALQgBAKAEAIIAOATIAPATIAUAOQASANAdAhQARARAUALQALAHAYAKQAYALAPAFQAZALA4AMQAbAGANACQAWACAKgHQANgHABgRQABgMgIgIQA9ALBMgCIAIAAQAlAEAvAAIAFAAIAFAAIACAAIgHAIQgKALgTAAQgZATgygEQgzgEglAIIg3ANQgfAIglAAIgMAAgAGIAOIgHAAIgDAAIADAAIAHAAg'
      )
    this.shape_97.setTransform(72.825, 66.6503)

    this.shape_98 = new cjs.Shape()
    this.shape_98.graphics
      .f('#F2EDDF')
      .s()
      .p(
        'AisBMQgOgMAFggQAKgHAGgMQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAagFAFgVIgEAAQA0goBHgSQAZgHAbABQBhABAuA4QgPAtguAQQguAPgyAIQhYAPhkABIgCAAQgFAAgEgDg'
      )
    this.shape_98.setTransform(154.5953, 131.8265)

    this.shape_99 = new cjs.Shape()
    this.shape_99.graphics
      .f('#E3DAD3')
      .s()
      .p(
        'ADDDaQgQgCgSgGIgRgBQgigDgRgHQgbgKgTgaIgBgCQgSgYgIgfIgCgOQgDgPACgLIACgHIABgCQAEgNANgPQAPgSAQgKQATgKAcgEIANgBQAPgBAWAAIASgCQA+gGBdAAQBvAAA/gGIAggDQAigEAcgJIAZgJIAfgMQAVgIASgEIASgCQAIgBAHACQAFgCAFAAQAFgDAGgBQAKgCAKADQAKAEAJALIAMAUIABACIAHAPQAEALACALQAIArgLAhIgJAUIgLASQgHAIgIAGIgMAKQgpAehHAUIgBAAIgPAFIgVAGIgLACIggAGQhVAQhVAEIgzAEQgjABg3AAQgtAAgbgEgAgxCMIgpgLQgogLgqgJQhUgRhPgWIgugMIhMgPQgdgGgZgIQgUgIgUgGQg4gPgggmQArAHAnAKIFEBOIBzAcIA9ANQAHACAHgBQAcgBgIAgQAJANgPAAQgIAAgMgDgAg/AwQgQgEgNgFIgZgIQgYgGgegGIhFgOIgvgKQiggniegsIicgsQg6gQgDhFIAAgEQAMABALADQASAFAPAIQAhATAnAMQCZAvCmAjIBsAWQAaAFAdADQAdAEASAMQARAAAQADIABAEQAbgEAOAJQADABADAAQArABAhAJQALAEANACQAKABgRAIQgKAEgCALQgGAOgFAOQgCAGgDADQgIAGgOAAQgKAAgMgDg'
      )
    this.shape_99.setTransform(98.1306, 145.075)

    this.shape_100 = new cjs.Shape()
    this.shape_100.graphics
      .f('#DCD3CC')
      .s()
      .p(
        'AmJBPIAAgFIADAOQAIAgASAXIABACQgcgVgCgtgAmKAsIADgFIgBACIgBAHIgBgEgAjkgjIgRACQgXAAgPACQAZgFAeABgADchIIgZAJQgdAJghAEIghAEQA/gJA5gRgAF+hXQgIgKgLgEQgJgEgKACQgGABgFADQgGAAgEACQgHgBgJAAIgRACQAtgSAkgeQAOAkAKAqIgNgVg'
      )
    this.shape_100.setTransform(139.275, 146.85)

    this.shape_101 = new cjs.Shape()
    this.shape_101.graphics
      .f('#09073C')
      .s()
      .p(
        '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'
      )
    this.shape_101.setTransform(4.6391, 70.1735)

    this.shape_102 = new cjs.Shape()
    this.shape_102.graphics
      .f('#873E7F')
      .s()
      .p(
        'ApQJkIAMgDIAKAFgApyJfIArAAIgJAFgApyJfQAPgRgogVQgwgagnAAQiRAAiVhbQiXhbAAhcIAAgFIACgHIAGgPIBVhxIAGgBIALgRIgRAGIgEABIgmAMQhLAXAghtQAfhsAOgnQAFgOAGgGQADgEAFgDQAEgQALgXQAZgzA6hXQAWghAMgPQATgaAUgRQAogjBDgWQAhgKATAFQALADAIAHIAEAEIADAEQgbADgaALQgTAIgeASQgWAOgQANQgcAXgWAlIgGAGQgJALgKAQQgiA1gOAcQgXAugIAoQgEAXADAOQAEAVAQAJQALAHAXABIAtABQAaABASACQASACAQAEQARAGAHAFQARAIASAPQgOAEgTABQjNCoBECSQBECSBZAKQBZAJANgDIBVgUQBIgRBxg/QByhABbhgQBbhhAhg1IAGgLQACABAGgBIgBABQgeBig2BcQgLATgNATIgeApQgjAmg2AnQhuBRguBBIggAVIgNAIIAAgBIgFAEIglASgAviAxQgNAJgHAGQgGAGgsA0IgWAZIhhB1IBhh1IAWgZQAsg0AGgGQAHgGANgJQAwgIBiggIgSAAQgggBgWAFQgWAGgeARIgWANIAAAAgApyJfgANfGpQhCgFg/gPQhJgThIgWQhAgagigYQgMgJgLgJQALAJAMAJQAiAYBAAaIhUgaIglgqQglgqgmgpIgBAAIAAgBQhFhYgBgCIAAAAIgDgGIgKgqQgEgTgOADIgKgTQgOgcgHgiIADABQAtAGgfgzIgXgpQABgbAEgfQAPhvA8iHQAPgIAigeQADAAgEgMQAAgagDgTIAFgLQAJgVgCAAIAAAAIAAAAIgBAAIgFAHIAAAAIgBABIAAAAIAAABIgBAAIAAABQgIhPCCgFQAzAEBoAOQBWANA1AJIAKACQBTATBjAcIAhASQAjAVAXARQAYATAKAQQASAdAbBUQAcBTgEB3QgDB2goByQgoBygqAxQgqAwgUAlQgVAkgeAPIgmARIgugFgANsnvQjQA2hVCdQh3CUAFCSQADBhA6BcQA6BcBIAUQBJATBQgPQBQgPBriaQBriZAVivQAJhKgVixQhrg+hyAAIgTAAgAFzC+IgBAAQgKgGgEgJIggghIgHgHIgOgNIgDgDIAFABIAQAFIAoAwIAeAmIgUgVgAhggqIALgKQgGAogLAnIgEAHQAMgjgCgpgAFvn4IAAgBIAIgLIACgBIACAKIgHAPIgFgMgAF/oRIAAgBIABAAIAAgBIAAAAIABgBIAAAAIAFgHIABAAIAAAAIAAAAQACAAgJAVIgBgLg'
      )
    this.shape_102.setTransform(20.6788, 24.7125)

    this.shape_103 = new cjs.Shape()
    this.shape_103.graphics
      .f('#E1A0EC')
      .s()
      .p(
        'AprJqIgKgHIgCgBIAVABIgEAEIgFAEIAAgBgAtiHcQhZgJhEiSQhFiSDNipQAUgBANgEQgSgOgQgJQgIgEgQgHQgQgEgSgCQgSgCgbAAIgsgBQgYgBgLgHQgPgKgEgVQgDgNAEgXQAHgpAYguQAOgcAhg0QALgRAJgLIAGgGQAWglAcgXQAPgNAWgNQAegTAUgIQAagKAagDIgDgEIgDgEQBBAAA6AHQAcADAaAFIAkAHQAeAGBLALQASADAHgEQBgARBZAZQC/A2gqEHQgegMADACIAQAMIAAAIQACApgNAjIgCAEQgPAWAEAEIgHALQghA2hbBgQhbBhhxA/QhyBAhHAQIhVAUIgMABQgYAAhCgHgAoWl+IADAAIgJgCIAGACgANpGvIAHgBIgEABIgDAAgANlGvIgFAAIgBgBQAAAAAHgCIATABIgJABIgHABIgEAAgAMMGrIgRgDQhMgLh2gsIgUgHQBIAVBJATQBAAQBCAFIAuAFQgHACAAAAIABABQgvAAglgEgAJtE0QhIgTg7hcQg6hcgDhiQgFiRB3iVQBWidDQg1QB8gGBzBEQAWCwgJBLQgVCuhrCZQhrCahRAPQgjAHghAAQgsAAgogLgAGTEJQgggZgSgdQAnAoAkAqQgOgNgLgPgAvzAiQAegSAWgFQAVgGAgABIATAAQhiAhgwAIIAWgNgAj+mWQgOgBgLgHQgMgHgEgLQgDgHABgHIibATQgBgKgLgRQB9ghAEgMQAFgOALgJQAQgNAjgJQBkgbB8gQQBagMCKgKQCtgOBhAHIAMABQiCAEAHBQIgGAJIAAgCQgHghgRgBIgBAAIAAAAQgQAAgZAfIAAABIgBABIgBACIgEAEIgBACIgBABIAAABIgDACIAAABQgeAjgQADIgCAAIAAAAQgOAAgDgeIAAgEIAAAEQADAeAOAAIAAAAIACAAQAQgDAegjIAAgBIADgCIAAgBIABgBIABgCIAEgEIABgCIABgBIAAgBQAZgfAQAAIAAAAIABAAQARABAHAhIAAACIgCADIgHAMIgOAXIgUAjQgxAEgyAJIAAhIQg0BcgggKIgfgLQgSgHgLgJIgLgKQiIARhrAfQggAJgQAAIgDAAgAE5nGIAUgoIAGgPQADASABAaIAAANIAAgNQADANgDAAIABgBIgBABIgfABIABgDgAMCo9QAwAIApAFQAkAFA4AdQhigchTgTg'
      )
    this.shape_103.setTransform(24.6282, 24.9694)

    this.shape_104 = new cjs.Shape()
    this.shape_104.graphics
      .f('#0365AC')
      .s()
      .p(
        'AI3G0QA2gnAjgmQhgB7iVBlQAuhCBuhRgAOUIyIAbgcQA8ggAihDIADgDQgvCChMAAIgBAAgAoDG2IAAgHIAAhsQAMgJgCgZIABgHQAPhZAahKQA0iUA7iNQAPgkASghQAjhCApg9QBPh4CChGQAhgSAvgGIAHgBQApgDAbAOQAbAJgoAJQgIACgIAEQiFBDhRB3QhRB2g5CRIg4CPQgdBKgZBLIghBfIgPAoQgLAfgJAjQgEAOgJAKIgGAJQgEAGgGADQgEANgKAHIgUAOQgEACgDAAQgLAAAEgkgAtQEZIgrgIIABgEIABgFIADgFIABgHIAEgKIAGgKIABgGIgCgIQgFgJgLACQgJACgFAJIgEAHQgEAIgHAGIgMANIgEAFIgBAEIg6AAIgMAAIgIgBIgFgBQgSgDgNgGQgTgKgQgXIgXglQAShIBKhFQAJgIAEgGQAFgLgEgHQgDgHgHgCQgIgCgHACQgHADgRANQgNALgYAQIgBAAIAAACIgWAOQgRAMgfAdIgCABIgLgQQglg2gPgnIgBgDQgGgiAAgoQAOgTAJgbQABgEADgEIAbgmIBcgJQgTAXgMAZIgDAKIAAADQAAAHACAFIAFAIIAJAHIgFgBIAEACIADAAIAAAAIAAgBIACAAQAFgDAGgHIAtgvQARgOAmgSIArgUQAYgJAUgDIAJgDIAxgPIBZgdQhFA2g3BVQgFAQgBASQgBAHACAEQAQgXAWgYQAZgaAygqQBShFAugdQAZgPAOgEQARgEAOACIAFgEIAAAFIAHADIALAGQAHADAGABIAEAAQAGgFAGgJQATgWAggUQAUgNAmgTIgdA7QgJAPAAALQgBAIAEAGIAEAFIAPgTQAigqANgNQAOgQARgPQARgZARgPQAMgJATgLIAhgTQASgMAAgMIACgCIATgEQAugMASgFIAMgEQhOBBg0BZIgGAKQgQAagQAdQhHCEg4CTQg3CQgoCfIAAABQgJgEgOgBIg7gGQgugFgXAAQgcgBgYAEIABgIIgCgJIgBgKIABgHIAEgGIAEgMQABgEAFgGIAHgLIAHgOQADgIgEgHQgEgGgHgCQgHgBgFAFIgFAHIgIAOIgMAWIgFALIgGAJQgFAIgFAKIgGALQgHANgBAJIAAAGIgPACIgDAAQgRAAgZgFgAUSDsIgegmIgmgzIAmAzIgngwIgCgJIADAGIAAAAQABACBEBYIgBgBgAM2gbQAqkHi/g2QhZgZhfgSIgmgGIArgGICbgTQgBAHADAHQAEALAMAHQALAHAOABQAQABAjgKQBrgfCJgRIALAKQALAJASAHIAfALQAgAKA0hcIAABIQAygJAxgFIgBADIAAAAQgSAkALgBQADAAAFgCIABAAQg9CGgPBwQgEAegBAcQgKgUgEgMQgGgTg2ADQgLgEhxADQhwAEgDAOQgEAOAAAUQABAUgEAgQgDAdghAyQAKgnAHgogA0SAAQACgNgBgQIAAgHQAIg4ATgoIAVgrQADgGAFgFQAIgGAMgEQgCAGADAFQADAHAKADQgKAOgMAOQgEADgCAGQgLAWgOAUQgBAmADAiQgHAGgCAIQgBAGACAGQgPgIgRAGgAMsgaIgRgLQgDgCAeAMIgLAKIABgJgAGcliIgFgCIAIACIgDAAgATYmjIAAAAIABgDIAUgjIAOgWIAAAAIAFAMIgUApIgBADIgRAlIgBAAQgFACgDAAIAAAAQgLAAASgjgATamCIAAAAgATrmnIAfgCIABAAIAAAAQgiAfgPAIIARglgAUFnsIgBgCIABACIgDABIACgDIAGgJIACAKIgGAMIgBgLgAUFnsIAAAAg'
      )
    this.shape_104.setTransform(-70.075, 22.19)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_104 },
            { t: this.shape_103 },
            { t: this.shape_102 },
            { t: this.shape_101 },
            { t: this.shape_100 },
            { t: this.shape_99 },
            { t: this.shape_98 },
            { t: this.shape_97 },
            { t: this.shape_96 },
            { t: this.shape_95 },
            { t: this.shape_94 },
            { t: this.shape_93 },
            { t: this.shape_92 },
            { t: this.shape_91 },
            { t: this.shape_90 },
            { t: this.shape_89 },
            { t: this.shape_88 },
            { t: this.shape_87 },
            { t: this.shape_86 },
            { t: this.shape_85 },
            { t: this.shape_84 },
            { t: this.shape_83 },
            { t: this.shape_82 },
            { t: this.shape_81 },
            { t: this.shape_80 },
            { t: this.shape_79 },
            { t: this.shape_78 },
            { t: this.shape_77 },
            { t: this.shape_76 },
            { t: this.shape_75 },
            { t: this.shape_74 },
            { t: this.shape_73 },
            { t: this.shape_72 },
            { t: this.shape_71 },
            { t: this.shape_70 },
            { t: this.shape_69 },
            { t: this.shape_68 },
            { t: this.shape_67 },
            { t: this.shape_66 },
            { t: this.shape_65 },
            { t: this.shape_64 },
            { t: this.shape_63 },
            { t: this.shape_62 },
            { t: this.shape_61 },
            { t: this.shape_60 },
            { t: this.shape_59 },
            { t: this.shape_58 },
            { t: this.shape_57 },
            { t: this.shape_56 },
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-222.4, -192.2, 439.4, 380.29999999999995)
  ;(lib.Tween1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f()
      .s('#09073C')
      .ss(5, 1, 1)
      .p(
        'AiLmIQCLApAQALQAkAVAPAKQALAGABABQA7A2ATAIQABABACABQB3AmB7AgQAPAFARAEQA1AOA4AGQAHABAFABAjsmPIA+ACAo+gzQATg9Aeg3QAcgxAjgvQAsg8A/gmQAvgdA3gFApBgoIgSBPIgIAfIADA7IAAAAQAAABAAABQAAADAAAEQAGBEA5AqQAAABACABIBWAjIAQAGAmdErQA7AUA/AMQAtAHAqALQBCAUBGAJQA+AIA8ADQA5AEAyAGQAxAFBJgIQA8gCA9gJQBJgKBLgCQAagDAagC'
      )
    this.shape.setTransform(-12.225, -29.6538)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f()
      .s('#05104D')
      .ss(5, 1, 1)
      .p('AgJgDIAAAAIADAAIAAAAIgDAAAgGgDIAGACIAAAAQAAAAABAAIAJADIAAABIAAAB')
    this.shape_1.setTransform(-54.575, -0.225)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.f().s('#05104D').ss(6, 1, 1).p('AgBgBIgEAAIgBAAIAKADgAAHABIgIgC')
    this.shape_2.setTransform(-55.375, -0.35)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics.f('#09073C').s().p('AFUBOIAEgBIgDACIgBgBgAlXhOIAJADIgBACIgIgFg')
    this.shape_3.setTransform(-20.05, 7.5)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics.f('#B13905').s().p('AAAAAIABAAIgBABIAAgBg')
    this.shape_4.setTransform(-14.85, -66.475)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics.f('#F8F4E3').s().p('AADAAIABAAIgHABIAGgBg')
    this.shape_5.setTransform(-36.3375, -69.6125)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#C7A1A1')
      .s()
      .p(
        'AAABVIBAgCIgCAAQggADgfABgABDBTIACAAIADgBIAAAAIABAAIADAAIAAgBIAFACIABAAIACABIgCABIgKgDIAHAEgABIBSIAKADIgDABgABSBTIgBAAIgFgCIgJgOQAKgGAIAJQAEAFAGAEIgLAFIgCgBgAA4BMIAEABIACAAIAKAFgABJBSIADgBIAAABgAhehNIAVgJIgVAQgAhehNIAAAAIAAAHg'
      )
    this.shape_6.setTransform(-62.825, -8.775)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#873E7F')
      .s()
      .p(
        'ACEGWQgygGg5gEQg8gDg+gIQhGgJhCgUQgqgLgtgHQg/gMg7gUIAAgCIABgBIACgIQgGgEgEgFQgIgJgKAGQgkgRglgDIgYgGIgCgCQg5gqgGhEIAVgQIgVAJIAAAHIAAgHIAAgBIAAgBIAAAAIAAgCQgBgvAEgcIACgNIAShPIADgLQATg9Aeg3QAcgxAjgvQAsg8A/gmQAvgdA3gFIAJgCIAIgCIgBAAIABAAIAOgDIAAgMIAAALIAIgBIAFgBIABgCIAAABIAOAAQAJAAAHACIAEADIABACIgBACIAAAAIAIABIAQABIgSAGIgCAGIgEgDIABgDIAFgBIALgEIgJgBIgGgBIgBACIgBAFIgBABIgBACQhCAagyAvQgvAsgoA0QgoA0gRA+QgSA/AMBBQAFAdAJAcQBBAuBLAbQBJAbBIAdIBkAnQA3AVA6ALQA/ANBAAAQBEABBFgIQBFgFBEgMQArgIArATQAOAHAQACQAlADAjgLIg3BVIg0AFQhLAChJAKQg9AJg8ACQgtAFgkAAQgWAAgTgCgAjLmGIg+gCgAnCEsIgCgBIACABgAp1CIIAAABIAAABIAAAAg'
      )
    this.shape_7.setTransform(-9.325, -30.3788)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#E1A0EC')
      .s()
      .p(
        'AA1FbQg/AAg/gNQg7gLg3gVIhkgnQhIgdhJgbQhLgbhBguQgJgcgFgdQgMhCASg+QARg+Aog0QAog0AvgsQAygvBCgaIACAAIAEADIACgGIASgGIgQgBIABgBIgJAAIABgCQAbABgDACIAKAEIDQBTIALAHQA7A2ASAIIADACQB3AmB7AgIAgAJQA1AOA4AGIAMACIgDAWIAAACQAjAIAxAtIAEAEQAhAcAOASQAVAcAMAgQAWA7gJBHQgDAegIARQgLAZgWAQQgHAHgXAIQgjALglgDQgQgCgOgHQgrgTgrAIQhEAMhFAFQhBAIhAAAIgIgBgAk+lRIABgFIABgCIgBAHIgCABIABgBgAk2lXIAJABIgLAEIACgFg'
      )
    this.shape_8.setTransform(2.1693, -34.8985)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    )

    // Layer_2
    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f()
      .s('#09073C')
      .ss(5, 1, 1)
      .p(
        'AltD1IgHgzAltD2IADAbQANAfASAcQAqBABKAXQAuAOAwgGQASgCARgDQAJABAIABQBIAFBKgmQApgUAWgcQANgRAGgRQAkghAYgdQAUgZAdgwQBChvAXhUQAfh0gghgQgWhDgwgvQgXgYgbgMQgLgGgMgDQgCgBgBgCQgDgCgDgDQghgbgzgBQhGgBg6AmQguAcgpAlQgvAtgvAuQgxAxgiA/QgmBIgeBKQgcBJgEBO'
      )
    this.shape_9.setTransform(-55.7373, -37.284)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#C7A1A1')
      .s()
      .p(
        'AhuCYQhJgXgqhAQgSgcgNgfIgDgaIAAAAIAAgEIAAADIgHgzIgBgSIAAgBIABgBIAAAAIAJgMQAMgPAvgjIAHgGIADACIAHgBQAOgCAVAJIAGADQAHACAJAGQAIAFAPANQANAMAUANQAXARAhAVQAgAXAWAGQAcAGA2gMIA3gLQAXgGALACQAJABAJAEQAJAFAIAIQAPAPAEAUQAEAUgHAVQgFARgNARQgWAcgpAUQhKAmhJgFIgSgCQgRADgQACQgPABgPAAQghAAgggJg'
      )
    this.shape_10.setTransform(-66.2523, -10.5577)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#F8F4E3')
      .s()
      .p(
        'ACiFIQgEgVgPgPQgIgIgKgFQgIgEgJgBQgMgCgXAGIg2ALQg1AMgdgGQgWgGghgXQghgVgXgRQgUgNgMgMQgQgNgIgFQgIgGgHgCIgHgDQgUgJgOACIgHABIgEgCIgHAGQguAjgMAPIgKAMQAEhOAchJQAehLAmhHQAig/AxgxIBehbQApglAugcQA6gmBGABQAzABAhAbIAGAFIADADQAMADALAGQAbAMAXAYQAwAvAWBDQAgBggfBzQgXBVhCBvQgdAwgUAZQgYAdgkAhQAHgVgEgUgAlFCNIgDADQgDAEAAAEQAFgDAKgLQgHABgCACg'
      )
    this.shape_11.setTransform(-55.7373, -43.2763)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }] })
        .wait(1)
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-95.5, -82.6, 156.9, 98)
  ;(lib.Symbol4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Layer_4
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#FFF390').s().p('AjiCtIGRm+QA1A7gBCpIkqE8QgJADgJAAQg7AAhOhlg')
    this.shape.setTransform(-280.1237, 4.734)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#FFF390').s().p('AkYDZIIBnhQATAMAJARQAJAQALAOIn9HWQgtgzgHADg')
    this.shape_1.setTransform(-276.225, -0.725)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.f('#FFF390').s().p('AjTC8IGRm8QAWAsAAAPQABAQgEA2IkrGAQhbgDgehCg')
    this.shape_2.setTransform(-267.4107, 7.6125)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.shape }] }, 3)
        .to({ state: [] }, 1)
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.shape_2 }] }, 1)
        .to({ state: [] }, 1)
        .wait(3)
    )

    // Layer_2
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f()
      .s('#5D3B00')
      .ss(9, 1, 1)
      .p(
        'AAAnGQAGAAAGABQACAAACABQACAAACAAQADABADABQADABADACQADAAADACQACABACABQACABACABQACACABABQACABACABQABABACABQABACACABQABABABABQABACACAAQAAACABABQABABABABQABACABABQABABABABQAAABABABQABABAAACQABABABABQAAABABACQABABABABQAAABAAABQABABAAACQABABAAABQAAABABABQAAABABABQAAACABABQAAABAAABQAAACAAABQAAABAAABQABABAAABQAAACAAABQAAABAAABQAAABAAABQABACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABgBABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABgBABQAAACAAABQAAABAAABQgBABAAABQAAACAAABQgBABAAABQgBABAAACQAAAAgBACQgBABAAABQgBABAAACQgBABAAABQgBABgBABQAAABgBACQAAABgBABQgBABgBABQgBACgBABQAAABgBABQgBABgCABQAAACgBABQgCABgBABQgBABgBABQgBACgCABQgBABgCABQgCACgBABQgCABgCABQgDABgCABQgCABgCACQgDABgDABQgCABgCABQgCAAgBAAQgCABgBAAQgCAAgCABQgCAAgCABQgGAAgGAAQgFAAgGAAQgCgBgDAAQgBgBgCAAQgDgBgDAAQgDgBgEgCQgCgBgDgBQgCgBgDgCQgCgBgCgBQgCgBgBgBQgCgBgCgCQgBgBgBgBQgBgBgCgBQgBgBgBgBQgBgCgCgBQgBgBgBgBQgBgCgBgBQAAgBgBgBQgBgBgBgBQgBgCgBgBQAAgBgBgBQgBgCgBAAQAAgBgBgCQAAgBgBgBQAAgBgBgCQgBgBAAgBQAAgBgBgBQAAgBgBgCQAAgBAAgBQAAgBgBgCQAAgBAAgBQAAgBAAgBQgBgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQgBgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAAAQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBABgCQAAAAAAgCQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBABgBQAAgBAAgBQAAgCAAgBQABgBAAgBQABgCAAAAQABgCAAgBQAAgBABgBQAAgCABgBQAAgBAAgBQABgBAAgBQABgBABgCQABgBABgBQAAgBAAgCQABgBABgBQABgBACgBQAAgBABgCQABgBABgBQABgBABgBQACgBABgBQABgCABgBQABgBACgBQABgCACgBQACgBABgBQACgBACgBQACgCACgBQACgBADgBQADgBACgBQADgBACgBQACAAABgBQACAAABgBQACAAABAAQADgBACAAQAGAAAFAAQAAgBAAAAg'
      )
    this.shape_3.setTransform(-279.575, -2.375)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#ECA700')
      .s()
      .p(
        'AgLHHIgFgBIgDgBIgGgBIgHgDIgFgCIgFgDIgEgCIgDgCIgEgDIgCgCIgDgCIgCgCIgDgDIgCgCIgCgDIgBgCIgCgCIgCgDIgBgCIgCgCIgBgDIgBgCIgBgDIgBgCIgBgCIgBgDIAAgCIgBgDIAAgCIAAgCIgBgCIAAgDIAAgCIAAgCIAAgDIgBgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgBIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgBIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIABgDIAAgCIAAgCIAAgCIAAgDIABgCIAAgCIAAgDIABgCIABgCIABgDIABgCIABgDIAAgCIABgCIACgDIACgCIAAgDIACgCIADgCIABgDIACgCIACgCIADgCIACgDIADgCIADgDIADgCIAEgCIAEgDIAFgCIAFgCIAFgCIADgBIADgBIADAAIAFgBIALAAIAAgBIAMABIAEABIAEAAIAGACIAGADIAGACIAEACIAEACIADADIAEACIADACIADADIACACIADACIABADIACACIACADIACACIABACIABADIACACIABADIACACIAAACIABADIABACIABACIABACIABADIAAACIAAADIAAACIABACIAAADIAAACIAAACIABADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAABIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAABIAAADIAAACIAAADIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIgBACIAAADIAAACIAAACIAAADIgBACIAAADIAAACIgBACIAAADIgBACIgBADIgBACIgBACIgBADIgBACIgCACIgBADIgBACIgCACIgCADIgBACIgDACIgBADIgDACIgCACIgDADIgDACIgDADIgEACIgFACIgEADIgGACIgEACIgDAAIgDABIgEABIgEABIgMAAIgLAAg'
      )
    this.shape_4.setTransform(-279.575, -2.375)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f()
      .s('#5D3B00')
      .ss(9, 1, 1)
      .p(
        'Ag+HNQhLAAg0iHQg1iHAAi/QAAi+A1iHQA0iHBLAAQARAAAQAIQAQgIAQAAQAQAAAOAGQAPgGAPAAQBLAAA0CHQA1CHAAC+QAAC/g1CHQg0CHhLAAQgPAAgPgGQgOAGgQAAQgQAAgQgHQgQAHgRAAg'
      )
    this.shape_5.setTransform(-279.35, -3.15)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics.f().s('#FFEDF9').ss(4, 1, 1).p('AhJnFQAQAHAOAOQAkAhAcBKQA1CHAAC+QAAC/g1CHQgcBJgkAiQgOAOgQAH')
    this.shape_6.setTransform(-275, -3.15)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#ECA700')
      .s()
      .p(
        'AgFHHQgPAGgQAAQgRgBgPgGQAPgIAOgNQAkghAbhKQA1iHAAi/QAAi+g1iHQgbhKgkghQgOgNgPgIQAPgGARgBQAQABAPAFQANgFAPgBQBLAAA0CHQA1CHAAC+QAAC/g1CHQg0CHhLAAQgPAAgNgGgAivD5QgchmABiPIAAgnQAEh2AXhXQAchmAmAAQAnAAAbBmQAcBlAACPIAAANQgCCIgaBgQgbBmgnAAQgmAAgchmg'
      )
    this.shape_7.setTransform(-275.4, -3.15)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#FADE00')
      .s()
      .p(
        'Ah/FGQg0iHAAi/QAAi+A0iHQA2iHBJAAQARABAQAGQAPAIAPANQAkAhAcBKQA1CHAAC+QAAC/g1CHQgcBKgkAhQgPANgPAIQgQAGgRABQhJAAg2iHgAhJjwQgXBXgEB2IAAAnQAACPAbBmQAcBmAnAAQAlAAAbhmQAbhgABiIIAAgNQAAiPgchlQgbhmglAAQgnAAgcBmg'
      )
    this.shape_8.setTransform(-285.65, -3.15)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f()
      .s('#5D3B00')
      .ss(9, 1, 1)
      .p(
        'Ag/HTQhqAAhMiJQhLiIAAjCQAAjABLiKQBMiIBqAAQASAAAQAEQAQgEARAAQAPAAAPADQAOgDAQAAQBqAABMCIQA2BjAPB/QAGAzAAA1QAAA3gGAyQgPB/g2BiQhMCJhqAAQgQAAgOgCQgPACgPAAQgRAAgQgEQgQAEgSAAg'
      )
    this.shape_9.setTransform(-277.025, -2.8)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics.f().s('#FFFFFF').ss(6, 1, 1).p('AhvnOQAPADAPAHQBCAdAzBdQBMCKAADAQAADChMCIQgzBehCAdQgPAHgPAD')
    this.shape_10.setTransform(-268.825, -2.8)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#ECA700')
      .s()
      .p(
        'AgDHQQgPADgPAAQgRAAgQgDQAOgEAPgGQBCgeAzheQBMiJAAjBQAAjAhMiJQgzhehCgeQgPgGgOgDQAQgEARAAQAPAAAPADQAOgDAPAAQBqAABMCJQA2BiAPCAQAHAxAAA2QAAA2gHAzQgPB/g2BiQhMCJhqAAQgPAAgOgDgAjpD2QgxhmAAiQQAAh4AjhbQAHgRAHgQQAzhmBGABQBFgBAxBmQAyBmAACOQAABdgVBLQgMApgRAlQgxBlhFABQhGgBgzhlg'
      )
    this.shape_11.setTransform(-273.25, -2.8)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f('#FADE00')
      .s()
      .p(
        'Ai1FKQhMiJAAjBQAAjABMiJQBLiJBqAAQARAAARAEQAPADAPAGQBCAeA0BeQBMCJgBDAQABDBhMCJQg0BehCAeQgPAGgPAEQgRADgRAAQhqAAhLiJgAiDj0QgIAQgHARQgjBbAAB4QAACQAyBmQAyBlBGABQBEgBAzhlQARglAMgpQAVhLgBhdQAAiOgxhmQgzhmhEABQhGgBgyBmg'
      )
    this.shape_12.setTransform(-283.4, -2.8)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f()
      .s('#5D3B00')
      .ss(9, 1, 1)
      .p(
        'AgyHZQiUAAhoiLQhpiKAAjEQAAjDBpiLQBoiKCUAAQAIAAAIABQAIgBAIAAQASAAAQACQARgCASAAQCUAABoCKQBpCLAADDQAADEhpCKQhoCLiUAAQgSAAgRgCQgQACgSAAQgIAAgIgBQgIABgIAAg'
      )
    this.shape_13.setTransform(-278.675, -2.5)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics.f().s('#FFEDF9').ss(4, 1, 1).p('AipnXQASABARADQBzAUBVBxQBoCLAADDQAADEhoCKQhVByhzAUQgRADgSAB')
    this.shape_14.setTransform(-265.175, -2.5)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f('#FADE00')
      .s()
      .p(
        'Aj7FOQhoiKAAjEQAAjDBoiKQBoiLCTAAIAQABQASABASADQByAUBWByQBoCKABDDQgBDEhoCKQhWByhyAUQgSADgSABIgQAAQiTABhoiLgAgvlgQgcAGgZAOQgvAagnA0QhOBpAACTQAACTBOBnQBOBpBsAAQAcABAbgJQAVgFATgKQAygaApg4QBNhnAAiTQAAiThNhpQhOhohsAAQgZAAgWAGg'
      )
    this.shape_15.setTransform(-283.8, -2.5)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f('#ECA700')
      .s()
      .p(
        'AgcHWQgSACgRAAIgRAAQASgBASgDQBxgUBWhyQBoiKABjEQgBjDhoiKQhWhyhxgUQgSgDgSgBIARgBQARAAASACQAQgCASAAQCTAABpCLQBoCKAADDQAADEhoCKQhpCLiTgBQgSAAgQgCgAkbD4QhOhnAAiTQAAiTBOhpQAng0AvgaQAZgOAcgGQAWgGAZAAQBsAABOBoQBNBpAACTQAACThNBnQgpA4gxAaQgTAKgVAFQgbAJgdgBQhsAAhOhpg'
      )
    this.shape_16.setTransform(-274.1, -2.5)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f()
      .s('#5D3B00')
      .ss(9, 1, 1)
      .p('AHVAAQAADCiJCKQiKCKjCAAQjCAAiJiKQiKiKAAjCQAAjCCKiJQCJiKDCAAQDCAACKCKQCJCJAADCg')
    this.shape_17.setTransform(-278.65, -3.6)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f('#FFF390')
      .s()
      .p('AjJEfIgOgMIgEgEIgDgCQgJgJAHAJQhDhOgVg9IHZmsIAcAOQAYAPAXATQANAKAfApIAJAKIgHgMIACgCQAQASANAVInyHPIgQgMg')
    this.shape_18.setTransform(-280.3125, -5.35)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#ECA700')
      .s()
      .p(
        'AjKEZIHynPQApBBAIBTQANB8hEBlIgVAdQhbBviPAOQgUACgSAAQhtAAhahCgAlYAjQgPiOBchvIAGgIQBZhoCKgOQBggKBTAnInZGrQgMgkgEgpgAEMjdIgCACQgFgKAHAIg'
      )
    this.shape_19.setTransform(-278.6699, -3.6002)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#FADE00')
      .s()
      .p(
        'AlLFMQiJiKgBjCQABjBCJiKQCJiKDCAAQDCAACKCKQCKCKAADBQAADCiKCKQiKCKjCAAQjCAAiJiKgAjvD7IADADIAEADIAOAMIAQAMQBpBNCEgNQCPgOBbhvIAVgdQBEhlgNh8QgIhTgphBQgNgUgQgTQgGgIAFAKIAGANIgIgLQgggogMgKQgYgTgYgPIgbgOQhTgnhgAKQiKAOhaBoIgFAHQhcBwAOCOQAFApAMAkQAUA9BDBOIgDgEIAFAEg'
      )
    this.shape_20.setTransform(-278.65, -3.6)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }] })
        .to({ state: [{ t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }] }, 1)
        .to({ state: [{ t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }] }, 1)
        .to({ state: [{ t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }] }, 1)
        .to({ state: [{ t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }] }, 1)
        .to({ state: [] }, 1)
        .wait(5)
    )

    // Layer_1
    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f()
      .s('#5D3B00')
      .ss(9, 1, 1)
      .p('AHVAAQAADCiJCKQiKCKjCAAQjCAAiJiKQiKiKAAjCQAAjCCKiJQCJiKDCAAQDCAACKCKQCJCJAADCg')
    this.shape_21.setTransform(-278.65, -3.6)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f('#ECA700')
      .s()
      .p(
        'AjaENIgSgPQhfhYgNiDQgPiOBchwIAGgHQBZhoCKgOQBxgMBdA3QAZAPAXATQBvBaAOCPQANB8hEBlIgVAdQhbBviPAOQgUACgSAAQh3AAhghOg'
      )
    this.shape_22.setTransform(-278.6699, -3.6001)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f('#FADE00')
      .s()
      .p(
        'AlLFMQiJiKgBjCQABjBCJiKQCJiKDCAAQDCAACKCKQCKCKAADBQAADCiKCKQiKCKjCAAQjCAAiJiKgAgilYQiKAOhaBoIgFAHQhcBwAOCOQAOCDBfBYIASAPQBvBbCOgPQCPgOBbhvIAVgdQBEhlgNh8QgPiPhuhaQgYgTgYgPQhNgthbAAQgSAAgUACg'
      )
    this.shape_23.setTransform(-278.65, -3.6)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f()
      .s('#5D3B00')
      .ss(9, 1, 1)
      .p(
        'AAzHZQCUAABoiLQBpiKAAjEQAAjDhpiLQhoiKiUAAQgIAAgIABQgIgBgIAAQgSAAgQACQgRgCgSAAQiUAAhoCKQhpCLAADDQAADEBpCKQBoCLCUAAQAJAAAIgBQAJgBAJgBQAIABAIABQAJABAJAAQAIAAAIgBQAIABAIAAg'
      )
    this.shape_24.setTransform(-278.125, -2.5)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#ECA700')
      .s()
      .p(
        'AAvHYIgRgCIgSACIgQAAQiUABhoiLQhpiKAAjEQAAjDBpiKQBoiLCUAAQAQAAASACQAQgCATAAIAPABQgRABgSADQhxAUhWByQhoCKAADDQAADEBoCKQBWByBxAUQASADASABIgQAAIgSAAgAAeHWIgSACIASgCIARACIgRgCgAApFZQgTgFgUgKQgxgagog4QhOhnAAiTQAAiTBOhpQBNhoBsAAQAZAAAXAGQAbAGAYAOQAwAaAnA0QBOBpAACTQAACThOBnQhNBphtAAQgdABgcgJg'
      )
    this.shape_25.setTransform(-282.7, -2.5)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f('#FADE00')
      .s()
      .p(
        'AgPHYQgSgBgSgDQhygUhWhyQhoiKAAjEQAAjDBoiKQBWhyBygUQASgDARgBIAQgBQCUAABoCLQBoCKABDDQgBDEhoCKQhoCLiUgBIgPAAgAi4j+QhOBpAACTQAACTBOBnQAoA4AyAaQAUAKATAFQAcAJAcgBQBtAABNhpQBOhnAAiTQAAiThOhpQgng0gwgaQgYgOgbgGQgXgGgZAAQhsAAhNBog'
      )
    this.shape_26.setTransform(-273, -2.5)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f()
      .s('#5D3B00')
      .ss(9, 1, 1)
      .p(
        'ABAHTQBqAABMiJQBLiIAAjCQAAjAhLiKQhMiIhqAAQgSAAgQAEQgQgEgRAAQgPAAgPADQgOgDgQAAQhqAAhMCIQg2BjgPB/QgGAzAAA1QAAA3AGAyQAPB/A2BiQBMCJBqAAQAQAAAOgCQAPACAPAAQARAAAQgEQAQAEASAAg'
      )
    this.shape_27.setTransform(-279.175, -2.8)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics.f().s('#FFEDF9').ss(4, 1, 1).p('ABwnOQgPADgPAHQhCAdgzBdQhMCKAADAQAADCBMCIQAzBeBCAdQAPAHAPAD')
    this.shape_28.setTransform(-287.375, -2.8)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f('#FADE00')
      .s()
      .p(
        'AghHQQgPgEgPgGQhCgeg0heQhMiJABjBQgBjABMiJQA0heBCgeQAPgGAPgDQARgEAQAAQBrAABLCJQBMCJgBDAQABDBhMCJQhLCJhrAAQgQAAgRgDgAhrj0QgxBmAACOQgBBdAVBLQAMApARAlQAyBlBFABQBGgBAyhlQAyhmAAiQQAAh4gjhbQgHgRgIgQQgyhmhGABQhFgBgyBmg'
      )
    this.shape_29.setTransform(-272.8, -2.8)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f('#ECA700')
      .s()
      .p(
        'AAEHQQgOADgPAAQhqAAhMiJQg2higPh/QgHgzAAg2QAAg2AHgxQAPiAA2hiQBMiJBqAAQAPAAAOADQAPgDAPAAQARAAAQAEQgOADgPAGQhBAeg0BeQhMCJAADAQAADBBMCJQA0BeBBAeQAPAGAOAEQgQADgRAAQgPAAgPgDgAgFD2QgRglgMgpQgVhLAAhdQAAiOAyhmQAxhmBFABQBGgBAzBmQAHAQAHARQAjBbAAB4QAACQgxBmQgzBlhGABQhFgBgxhlg'
      )
    this.shape_30.setTransform(-282.95, -2.8)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f()
      .s('#5D3B00')
      .ss(9, 1, 1)
      .p(
        'AA/HNQBLAAA1iHQA0iHAAi/QAAi+g0iHQg1iHhLAAQgRAAgQAIQgQgIgQAAQgQAAgOAGQgPgGgPAAQhLAAg0CHQg1CHAAC+QAAC/A1CHQA0CHBLAAQAPAAAPgGQAOAGAQAAQAQAAAQgHQAQAHARAAg'
      )
    this.shape_31.setTransform(-276.25, -3.15)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics.f().s('#FFEDF9').ss(4, 1, 1).p('ABKnFQgQAHgOAOQgkAhgbBKQg1CHAAC+QAAC/A1CHQAbBJAkAiQAOAOAQAH')
    this.shape_32.setTransform(-280.6, -3.15)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f('#FADE00')
      .s()
      .p(
        'AggHGQgPgIgPgNQgjghgdhKQg1iHAAi/QAAi+A1iHQAdhKAjghQAPgNAPgIQAQgGAQgBQBKAAA1CHQA1CHAAC+QAAC/g1CHQg1CHhKAAQgQgBgQgGgAg5jwQgcBlAACPIAAANQACCIAaBgQAbBmAmAAQAmAAAbhmQAchmAAiPIgBgnQgDh2gYhXQgbhmgmAAQgmAAgbBmg'
      )
    this.shape_33.setTransform(-269.95, -3.15)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f('#ECA700')
      .s()
      .p(
        'AAHHHQgOAGgPAAQhLAAg1iHQg0iHAAi/QAAi+A0iHQA1iHBLAAQAPABAOAFQAOgFAPgBQASABAQAGQgQAIgOANQgkAhgcBKQg0CHAAC+QAAC/A0CHQAcBKAkAhQAOANAQAIQgQAGgSABQgPAAgOgGgAAsD5QgahggCiIIAAgNQABiPAbhlQAchmAmAAQAnAAAbBmQAYBXADB2IABAnQgBCPgbBmQgbBmgnAAQgmAAgchmg'
      )
    this.shape_34.setTransform(-280.2, -3.15)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f()
      .s('#5D3B00')
      .ss(9, 1, 1)
      .p(
        'AA+mrQgBAAAAgBQgBgBgCgBQAAgBgBgCQgBgBgBgBQgBgBgBgBQgCgBgBgBQgBgCgBgBQgBgBgCgBQgBgCgCgBQgCgBgBgBQgCgBgCgBQgCgCgCgBQgCgBgDgBQgDgBgCgBQgDgBgCgBQgCAAgBgBQgCAAgBgBQgCAAgBAAQgDgBgCAAQgFAAgGAAQAAgBAAAAQgGAAgGABQgCAAgCABQgCAAgCAAQgDABgDABQgDABgDACQgDAAgDACQgCABgCABQgCABgCABQgCACgBABQgCABgCABQgBABgCABQgBACgCABQgBABgBABQgBACgCAAQAAACgBABQgBABgBABQgBACgBABQgBABgBABQAAABgBABQgBABAAACQgBABgBABQAAABgBACQgBABgBABQAAABAAABQgBABAAACQgBABAAABQAAABgBABQAAABgBABQAAACgBABQAAABAAABQAAACAAABQAAABAAABQgBABAAABQAAACAAABQAAABAAABQAAABAAABQgBACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAAAAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABABABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABABABQAAACAAABQAAABAAABQABABAAABQAAACAAABQABABAAABQABABAAACQAAAAABACQABABAAABQABABAAACQABABAAABQABABABABQAAABABACQAAABABABQABABABABQABACABABQAAABABABQABABACABQAAACABABQACABABABQABABABABQABACACABQABABACABQABABABABAA+mrQgCgBgBgBQgCgBgCgBQgCgCgCgBQgCgBgDgBQgDgBgCgBQgDgBgCgBQgCAAgBgBQgCAAgBgBQgCAAgBAAQgDgBgCAAQgGAAgGAAQAAgBAAAAQgGAAgFABQgCAAgCABQgCAAgCAAQgDABgDABQgDABgDACQgDAAgDACQgCABgCABQgCABgCABQgCACgBABQgCABgCABQgBABgCABQgBACgCABQgBABgBABQgBACgCAAQAAACgBABQgBABgBABQgBACgBABQgBABgBABQAAABgBABQgBABAAACQgBABgBABQAAABgBACQgBABgBABQAAABAAABQgBABAAACQgBABAAABQAAABgBABQAAABgBABQAAACgBABQAAABAAABQAAACAAABQAAABAAABQgBABAAABQAAACAAABQAAABAAABQAAABAAABQgBACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAAAQAAACAAAAQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAABAAABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABAAACQAAABAAABQAAABAAACQAAAAAAACQAAABAAABQAAABAAACQAAABAAABQAAABAAABQAAABABABQAAACAAABQAAABAAABQAAACAAAAQAAACAAABQAAABABABQAAACAAABQAAABAAABQABABAAABQAAACAAABQABABAAABQABABAAACQAAAAABACQABABAAABQABABAAACQABABAAABQABABABABQAAABABACQAAABABABQABABABABQAAABAAAAQABABABABQAAABABABQABABACABQAAACABABQACABABABQABABABABQABACACABQABABACABQACACABABQACABACABQADABACABQACABACACQADABADABQACABACABQACAAABAAQACABABAAQACAAACABQACAAACABQAFAAAGAAQAGAAAGAAQACgBADAAQABgBACAAQADgBADAAQADgBAEgCQACgBADgBQACgBADgCQACgBACgBQACgBABgBQACgBACgCQABgBABgBQABgBACgBQABgBABgBQABgCACgBQABgBABgBQABgCABgBQAAgBABgBQABgBABgBQABgCABgBQAAgBABgBQABgCABAAQAAgBABgCQAAgBABgBQAAgBABgCQABgBAAgBQAAgBABgBQAAgBABgCQAAgBAAgBQAAgBABgCQAAgBAAgBQAAgBAAgBQABgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQABgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAAAAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAAAQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBAAgBQAAgCAAAAQAAgBAAgCQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBAAgBQAAgBAAgCQAAgBAAgBQAAgBgBgCQAAAAAAgCQAAgBAAgBQAAgBAAgBQAAgCAAgBQAAgBgBgBQAAgBAAgBQAAgCAAgBQgBgBAAgBQgBgCAAAAQgBgCAAgBQAAgBgBgBQAAgCgBgBQAAgBAAgBQgBgBAAgBQgBgBgBgCQgBgBgBgBQAAgBAAgCQgBgBgBgBQgBgBgCgBQAAgBgBgCQgBgBgBgBQgBgBgBgBQgCgBgBgBQgBgCgBgBQgBgBgCgBQgBgCgCgBg'
      )
    this.shape_35.setTransform(-278.625, -1.375)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f('#ECA700')
      .s()
      .p(
        'AgBHRIgEgBIgEgBIgDgBIgDAAIgEgCIgGgCIgEgDIgFgCIgEgCIgDgDIgDgCIgDgDIgCgCIgDgCIgBgDIgDgCIgBgCIgCgCIAAgBIgCgCIgBgCIgBgDIgCgCIgBgCIgBgDIgBgCIgBgCIgBgDIgBgCIAAgDIgBgCIAAgCIAAgDIgBgCIAAgDIAAgCIAAgCIAAgDIgBgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgBIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgBIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIABgDIAAgCIAAgCIAAgDIABgCIAAgCIAAgDIAAgCIABgDIABgCIABgCIABgCIABgDIAAgCIACgCIABgDIACgCIABgDIABgCIACgCIACgDIACgCIABgDIADgCIACgCIADgDIADgCIAEgCIADgDIAEgCIAEgCIAGgCIAGgDIAGgCIAEAAIAEgBIALgBIAAABIAMAAIAFABIADAAIADABIADABIAFACIAFACIAFACIAEADIAEACIADACIADADIADACIACADIADACIACACIACACIABADIADACIACACIAAADIACACIACADIABACIAAACIABADIABACIABADIABACIABACIAAADIAAACIABACIAAADIAAACIAAACIAAACIABADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAABIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIgBACIAAADIAAACIAAACIAAADIgBACIAAACIAAACIgBADIAAACIgBADIgBACIgBACIgBADIgBACIgBADIgCACIgBACIgCADIgCACIgBACIgCADIgCACIgDADIgCACIgDACIgCACIgEADIgDACIgEACIgFADIgFACIgHADIgGABIgDABIgFABIgMAAIgLAAgAg9GsIgDgCIgDgDIgCgCIgDgCIgBgDIgDgCIgBgCIgCgDIgCgCIgBgCIgBgDIgCgCIgBgCIgBgDIgBgCIgBgCIgBgDIgBgCIAAgDIgBgCIAAgCIAAgDIgBgCIAAgDIAAgCIAAgCIAAgDIgBgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgBIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgBIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgBIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgCIABgDIAAgCIAAgCIAAgDIABgCIAAgCIAAgDIAAgCIABgDIABgCIABgCIABgCIABgDIAAgCIACgCIABgDIACgCIABgDIABgCIACgCIACgDIACgCIABgDIADgCIACgCIADgDIADgCIAEgCIADgDIAEgCIAEgCIAGgCIAGgDIAGgCIAEAAIAEgBIAMgBIAAABIALAAIAFABIADAAIADABIADABIAFACIAFACIAFACIAEADIAEACIADACIADADIADACIACADIADACIACACIACACIABADIADACIABABIgDgCIgEgCIgEgDIgFgCIgFgCIgFgCIgDgBIgDgBIgDAAIgFgBIgMAAIAAgBIgLABIgEABIgEAAIgGACIgGADIgGACIgEACIgEACIgDADIgEACIgDACIgDADIgCACIgDACIgBADIgCACIgCADIgCACIgBACIgBADIgCACIgBADIgCACIAAACIgBADIgBACIgBACIgBACIgBADIAAACIAAADIAAACIgBACIAAADIAAACIAAACIgBADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAABIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAABIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAADIAAACIAAACIAAADIAAACIAAACIABACIAAADIAAACIAAACIAAADIABACIAAADIAAACIABACIAAADIABACIABADIABACIABACIABADIABACIACACIABADIABACIACACIAAABIgCgCg'
      )
    this.shape_36.setTransform(-278.625, -1.375)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }] }, 5)
        .to({ state: [{ t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }] }, 1)
        .to({ state: [{ t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }] }, 1)
        .to({ state: [{ t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }] }, 1)
        .to({ state: [{ t: this.shape_36 }, { t: this.shape_35 }] }, 1)
        .wait(1)
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-330.1, -55, 102.90000000000003, 104.7)
  ;(lib.Layer29 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#E79EEC').s().p('AhjCOQiQgQAEipQA6hbCOgKQCrgLBiA+QAUAfgSAoQgpBZhHA7Qg9AVhOAAQgmAAgqgFg')
    this.shape.setTransform(226.0209, 316.3719)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#C374BB')
      .s()
      .p(
        'AhtCZQhQgHgig6Qgfg1AFhZQA7hbCNgJQC7gMBwA+QgFB8g/BDQgYAagcAWQhFAWhaAAQgmAAgqgEgAgniRQiNAKg7BbQgECpCRAQQCAAOBageQBHg7AphZQASgogUgfQhSg0iIAAQgYAAgbABg'
      )
    this.shape_1.setTransform(225.9648, 316.4704)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#D58DD7')
      .s()
      .p(
        'AHXCZQhhgJhUgKQiLgRh3giIgLgCQj6gwiyh0QgGgEgGgCQg8gRgdguQDCBlDqBBQBwAgCAAZQB2AXCTANQAIAAANAFIAXAAQApgBgCAXQgBATgcAAIgIAAg'
      )
    this.shape_2.setTransform(134.8524, 291.3183)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#853D7E')
      .s()
      .p(
        'AAkCVIiegNQhEgGg8gXQgMgFgJgPQgVgjAKhFQAXg0ASg5QANgpAnAZQAjAWAnAUQBiAwBvAqQA1ASA8ALQAwAKAbAcQAFAFAAAKIAAAUQhBA8iBAAQgbAAgegDg'
      )
    this.shape_3.setTransform(100.3413, 298.7522)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics.f('#A35A9F').s().p('AiGgGQCGAACHAFIAAAEQhGAAhFADIgcABQg7AAgrgNg')
    this.shape_4.setTransform(131.5, 199.7122)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#200F4B')
      .s()
      .p('AgkBGQgHgCgIgGQgbgTAKg2QAxhMAkAPQAlAPAJARQAJARAAAjQgBAjgFAGQgUAWgmAAQgTAAgZgFg')
    this.shape_5.setTransform(144.8913, 176.2495)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#23114E')
      .s()
      .p('AgnA0QgcgWALg8QAVgeAYgEQAXgEAZAMQAYANgBAeQgBAegKAQQgLAQgIAFQgRAMgQAAQgSAAgSgOg')
    this.shape_6.setTransform(101.7115, 172.1277)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics.f('rgba(9,2,33,0.525)').s().p('AAAA2QgEg2AAg2IAJAAIAABjIAAAKIgFgBg')
    this.shape_7.setTransform(1.5, 154.5)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#1F104B')
      .s()
      .p(
        'AiyDmQgMgHgMgDQg/gpgmhAIgNgbQgOgeABhKIAAgKQA/joEUgKQCDgEBOA5IAzAnQBABMgECPQgBAxgTAfQg5Bdh5AiQgnALgsAFQgfADgbAAQhlAAhEgngAgxjRQhWAUgzAlQgzAmgWBOQgLCfBmAuIAQAIQBDApBygLQClgPA5hrQAJgRAAgFIAAgHQADgQACgRQADgigIgjQgCgoghgqQghgqg+gkQgFAAgFgCQgkgLgsAAQgpAAgwAKg'
      )
    this.shape_8.setTransform(75.0332, 120.7117)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#F7F6F8')
      .s()
      .p(
        'AiaC3IgQgIQhmguAKigQAWhOA0glQAzgmBVgTQBigWBIAXQAEABAFAAQA/AkAhAqQAhAqABAoQAJAjgDAiQgCASgEAQIAAAGQAAAFgJARQg4BsilAPQgYACgWAAQhSAAg1gggAghh2QhAAMgPA3IAAAoQAAAYAJAWQAkBcB8gnIALgJQAJgGAHgIQApgwgahEQgbhHhHAAQgPAAgTAEg'
      )
    this.shape_9.setTransform(75.254, 120.1911)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics.f('#E4E3E9').s().p('AgfAAQAqg8AUBHQACAIgHADQgRAGgMAAQgaAAgCgcg')
    this.shape_10.setTransform(74.1711, 119.0581)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#1A0E47')
      .s()
      .p(
        'AhlAvQgJgWAAgZIAAgnQAPg3BAgMQBigVAiBYQAaBEgpAwQgHAIgJAGIgLAJQglALgcAAQhGAAgZhAgAgoAAQADAqA2gTQAHgDgCgIQgLgngQAAQgPAAgUAbg'
      )
    this.shape_11.setTransform(75.0795, 118.9984)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics.f('rgba(78,24,17,0.502)').s().p('AgJAjIAAg7QAQABgCgVIAFAAIgBAKQgFArgNAkIAAgKg')
    this.shape_12.setTransform(14, 28.5)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics.f('rgba(32,9,2,0.247)').s().p('AgxgEIBZAAIAKAAQAAAEgBAAQgaAFgVAAQgdAAgWgJg')
    this.shape_13.setTransform(62, 0.5104)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#E49CE9')
      .s()
      .p(
        'ACRD6IAAgFQiHgFiGAAQgUAAgUgBQg3gEgugLQhHgQg8gWQhwgpAEiaQAVhFAlg0QACgEAAgFQCxh2E4AIQB1AEBcAUQBoAXBKA5QBJA5AACAQgLBZg4AsQgDACAAAFQhrBEitACIgKAAgABLAAQgKA3AbAUQAIAFAHACQBJASAegiQAFgGABgkQAAgjgJgQQgJgRglgPQgGgDgHAAQggAAgpA+gAkrhdQgYAEgVAeQgLA8AdAXQAiAbAjgZQAIgGALgPQAKgPABgfQABgfgYgMQgTgKgSAAIgMABg'
      )
    this.shape_14.setTransform(130.4931, 174.9716)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f('#341653')
      .s()
      .p(
        'AgOHFQh2gJhFg+QgSgRgTgPQgGgFgKAAQgmhRgohQQgCgEAAgFQhshDhhhPQgFgEgEgIQgBgCgFAAQgcg4gChTIAAgKQAQg2ATg2QAHgUAMgQQALgQAIgTQACgGAFgFIAKgKQCuh5EyADQCJABBwAUQB0AWBZA1QAUAMAQAUQAtA2AsA4QAhB6gWB/IgBAKQhMCBicAqQgtAMghARQgfAngZAwQgaAvgmAkQgyAUg0ANQgVAFgWAAIgOAAgAnGkSQAAAFgCAEQglA0gVBFQgECaBwApQA8AWBHAQQAuALA3AEQAUABAUAAQA1ASBNgEQBFgEBGAAIAKAAQCtgCBrhEQAAgFADgCQA4grALhZQAAiBhJg5QhKg5hogXQhcgUh1gEIgoAAQkcAAilBug'
      )
    this.shape_15.setTransform(131.478, 188.4776)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics.f('#ECEBF0').s().p('AABAhQgsgCAPg1QA+gggBBHQAAAQgdAAIgDAAg')
    this.shape_16.setTransform(223.947, 138.3211)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f('#1C1048')
      .s()
      .p(
        'Ag6BnQhLgaANh1QAvhsCMAtQAiALAMApQAKAgAAAmQAAAmgOAgQgpAcgzAAQgiAAgpgOgAgegUQgOA1AsACQAfABABgRQAAgxgeAAQgNAAgTAKg'
      )
    this.shape_17.setTransform(224.0976, 138.1367)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f('#F9F8FA')
      .s()
      .p(
        'AiADQQhbg6g1hgQgUglAEg6QAahKA0gxIAhgWQA9goBNgFQBNgGBMAYQBMAXBPBuQACAEAAAFQAcA0gPBVQgKA7gqAtQgyA2hlAHQgbACgYAAQhZAAhFgZgAh2gzQgNB1BLAaQBiAiBFgwQAOggAAgmQAAgmgKggQgMgpgigLQgqgNggAAQhQAAghBMg'
      )
    this.shape_18.setTransform(223.8564, 139.2098)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#1F104A')
      .s()
      .p(
        'AjyDSQgxgvgig8Qghg6AChbQAihvBKhHQACgDAAgFQBbg7CVgBQCWgBBUBCQAXASAVATQBPBHAGCJQADBHgVA5QgTA1gsAiQhSBBiXACIgOABQi0AAhbhXgAgljsQhOAGg8AnIghAXQg0AwgaBKQgEA7AUAlQA1BfBbA6QBYAhB5gJQBlgIAyg1QAqgtAKg7QAPhVgcg1QAAgFgCgDQhPhvhMgXQg+gTg+AAIgdABg'
      )
    this.shape_19.setTransform(223.688, 139.6558)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics.f('#6B4588').s().p('ACCAFIkNAAIAAgJQCLAACMAEIAAAFIgKAAg')
    this.shape_20.setTransform(306, 12.5)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f('#863D7E')
      .s()
      .p('AjaCwQgLgCgMgGQgngSgJguQDehJCsh2QBMg0BFg4QAoBzAACQQAAAUgEAVQgDAbgNAMQhAAvhqAEIhGABQiDAAh1gUg')
    this.shape_21.setTransform(368, 294.5921)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics.f('#794475').s().p('AgIBGIAAiVQARAbAAA0QAAA1gRAbIAAgKg')
    this.shape_22.setTransform(436.875, 171)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f('#873E7F')
      .s()
      .p(
        'ACGQyQiWgChjgvQgwhNgaheQgbhhgnhSQgKgFgKgBQhWgIhUgGQALATAgAVQiSgNh2gXQiAgYhxggQjqhCjChmQgogigvgeQiDhShshrQiUiUhvi5Qhui3gyj5QgZh5AKigQAkhjAdhuQAAgBAFAAQAAAFgGAYQgFAXABAwIAAAeIAAAKIAAC0IAAAKQAbEMB7CtQB6CsCaCMIArAmQCbCLDXBUQDSBRD7AuQD4AuEQAbIALABQCDAWCTAAQEkgBDwgyQCMgeBwgxQAQgIATgFQDihBDGheQDJhhCXiPIALgKQCaiMB0iyIAJgOQBCh1AeiUQALg4ASgqQASA6gEBSQgLEghqC6QhsC9iaCNQiaCNi4BsQglAVgmATQjGBfjrA5Qh/Afh6AhQAIgWAAgcQAAggAegHQAvgLAjgeIAFgFQgWgWg1AHQglANgqAKQgnAJABA6QAAA1gJAwQgkC7hsBwQhlAoiUAAIgVgBgAAiKtQiMAJg7BbQgFBaAfA1QAiA6BQAHQCMANBjgfQAcgWAYgaQA/hDAFh9Qheg0iTAAQgdAAgeACgAAgjTQhYg4ALidQAdh5CWgHQBngEBWALQBXALAqBJQApBKgOBEQgOBEgUATQg/A5hsAIQgcACgZAAQh0AAhJgugA7mnhQgEgDgtgxQgtgyAJhDQAJhDAOgbQAyhlCtAhQA2AKAaAmQA+BRgdB1QgIAggRAdQgNAVgVAMQg2AdgyAAQg6AAg1gmg'
      )
    this.shape_23.setTransform(217.5842, 232.46)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f('#140641')
      .s()
      .p(
        'ADLGkQgbgrgYgqQgdgygkgoQiLiZi2hzQgggVgpgJQhAgQgPg8QBvi5DlhBQBOgWBSgLQBlgOBOARQAzBjAdB5QAYBkgRBkIgOBNQgaCFgvB3IgFAAQgEBQhQAAIgBAAg'
      )
    this.shape_24.setTransform(290.6896, 60.0464)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics.f('#794D90').s().p('AgIBLIAAifQARAbAAA1QAAA5gRAgIAAgKg')
    this.shape_25.setTransform(346.875, 57.5)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f('#863E7F')
      .s()
      .p(
        'AS6GIQBRABAEhQIAFgBQAWAoAsgjQBhhMA0h5QATgrAagjIAAAKQgCEHiUB1QgFAoASASQACACAFAAQgUAUgfAEQgYAEgUAAQh8AAgBiAgAtvjZQgFAAgEgCQgGgDgFgEQhwhjiShCIgcgNQhhgyiTgHQg1gDgbASQghAVgRgMIAAgKQBOhcC/AaIAMADQDsA9CWCRQATARAiACQBCADgbAtQgNAXglAAQgNAAgQgDg'
      )
    this.shape_26.setTransform(190, 62.787)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics.f('#8F5FA5').s().p('AgEBBIAAiLQAQA+gMBXIgEAAIAAgKg')
    this.shape_27.setTransform(353.5104, 59.5)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f('#E69DEB')
      .s()
      .p(
        'AImWtQB6giB/gfQDrg5DGhfQAmgSAlgVQC4hsCaiOQCaiNBsi+QBqi6ALkfQAEhTgSg5QgSAqgLA4QgeCThCB1IgJAPQh0CyiaCMIgLAKQiXCQjJBgQjGBfjiBAQgTAGgQAHQhwAxiMAeQjwAzkkAAQiTABiDgWIgLgCQkQgbj4gtQj7gujShSQjXhTibiMIgrgmQiaiMh6itQh7isgbkMIAAgKIAAizIAAgKIAAgeQgBgwAFgYQAGgXAAgFIAAgKQBFiXBbiBQA+hZBMhJQCWiSC4htQBlg8B1gsQARgHADgWQA9ALASggQAbgthCgDQgigCgSgRQiXiQjsg+IgLgCQjAgahOBcIAAAKQgFAAgBACIhABsQgDBwAPA5QAgB/BHBaQAiArgdAfQgKAFgIgCQgRgDgLgQQgtg/gkhOQgshhgJiIQARg6AMg+IABgKQAphAA5gxQACgCAAgFQBsgqCOABIAeABQCQAGB9AeIDwA5IAMAEQA6ATAzAZQAaANAigBQBSgBBNgSQBygbCAgJQBMgGBAgJQBMgMArAJQhpAth6AhQgbAHghAMQgpAOgzAMQgvAKgYAlQAfAsBFAJQA3AHA3ANQAyAMBGgFQC3hxDkg9QBigaBSgjQAtgTAsgOQA1gSAkAQQAOAdgyAUQgnAPgdAgQhKBRg5BgQgLASAQgBQA4AQAlg3QBXiDCChaQAvgSA/gHQA2gGA4gJIEOAAIAKAAQBVAUA5AvQADADAFAAQBKB5AjCfIABAKIAACgIAAAKIAAAKQgaAigSAsQg0B4hiBNQgrAigXgnQAvh3AaiFIAOhNQARhlgYhkQgdh5gzhjQhOgRhlAOQhSALhPAWQjlBBhvC5QAPA8BAAQQApAJAgAVQC2B0CMCZQAkAoAdAyQAYAqAbArQACCUCngYQAfgFAUgTQA5gSAggrQBqiRAFj0IAFgBQANhXgSg+IAAgKQgBg2gJguQBjAzBbA7QCzB0CHCgQBFBRA8BbQB1CxA4DsQAcBzAGCFIAACWIAAAKQgGBjgXBRQhBDnh6CvQh4CsioB+QipB/jQBVIgRAIQjJBbkEAoQg9AKg8APQgUAFgPAAQgoAAgFgjgA2VgQIgKAKQgFAFgCAFQgIATgLAPQgMARgHATQgTA2gQA3IAAAKQACBTAcA5QAFAAABACQAEAIAFAEQBhBPBsBDQAAAFACAEQAoBPAmBSQAKAAAGAFQATAPASAQQBFA+B2AJQAeADAcgIQA0gNAygTQAmglAagvQAZgvAfgnQAhgRAtgMQCcgrBMiAIABgKQAWiBghh5Qgsg4gtg2QgQgTgUgMQhZg2h0gVQhwgViKgBIgPAAQkoAAipB3gAA8DNQiWAGgdB6QgLCcBZA5QBYA3CZgMQBsgIA/g4QAUgUAOhEQAOhEgphJQgqhKhXgLQg+gHhHAAIg4ABgA9uANQgOAbgJBDQgJBDAtAxQAtAyAEACQBkBHBzg9QAVgMANgWQARgcAIggQAdh2g+hPQgagng2gKQgqgIgjAAQhsAAgmBMgAgTnSQiVABhbA7QAAAFgCACQhKBHgiBwQgCBcAhA5QAiA9AxAtQBfBaC+gDQCXgDBShAQAsgjATg0QAVg5gDhHQgGiKhPhHQgVgTgXgSQhThAiSAAIgFAAgA3Qp0QkVAKhADoIAAAKQAABLAOAeIANAbQAlBABAApQAMADAMAHQBWAyCOgOQAsgFAmgLQB5giA5hdQATgfACgxQADiQhAhMIgzgnQhIg1h1AAIgTAAg'
      )
    this.shape_28.setTransform(224.9833, 156.7179)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics.f('rgba(199,135,210,0.996)').s().p('AgJAhQgsgDAPg2QBJgZAHAvQAGAjgvAAIgKAAg')
    this.shape_29.setTransform(434.9031, 60.4604)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f('rgba(222,151,229,0.996)')
      .s()
      .p(
        'Ag7CqQgxgXARghQACgEAKAAQB9gKAEiBQgVhXhVAiQgPAGAJAZQAJAWAgAJQACABABAKQABAagWADQgiAjgngyQgXgcAFg4QABgUAAgUQAjhGBoAIQAiADAZAUQBLA8gOCUQgeBuh3AWIgOABQgUAAgGgNg'
      )
    this.shape_30.setTransform(410.9976, 57.9965)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f('rgba(22,7,64,0.988)')
      .s()
      .p(
        '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'
      )
    this.shape_31.setTransform(224.406, 173.0079)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Layer29, new cjs.Rectangle(1, 0, 445.8, 346), null)
  ;(lib.Layer28 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('rgba(219,223,233,0.992)')
      .s()
      .p(
        'AN3CoQgcgcgZgeQAfAMAYATQAKATgFAAIAAAKQgFAAgCgCgAKZBOIhvgwQivgniwghQhFgMhFgKQj7gmkrAGQhGAChGgBQhSgBg7AKQhRAOgwgHIAAgKQAFgFAGgDQAEgCAFAAQA1gbA4gZQAjgPAaASQAXARAvgIQA1ARBMgMQABAAAAgFQBKAJAdglQACgCAFAAIBQAAIAKAAIBQAAIAKAAQA6ASBSgIIAKAAQEKAcDcBQQAdALAjAKQAgAIAPAMQAQAKAqAQQArARApAvQgFAAgEgCg'
      )
    this.shape.setTransform(284.8806, 119.75)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#EAF6FC')
      .s()
      .p(
        'AC5BfQgFAAgIgHQg4gxhHgiQhHgThCAiQgzAag2AXQgCABgFgFQAkhOA4g6QADgDAFAAQAegcA9ALQAqAIAhAPQBWAoAvBTQAYAoggAAIgCAAg'
      )
    this.shape_1.setTransform(101.8087, 426.2359)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#EDF5F8')
      .s()
      .p(
        'AGwBJQhDgUhAgQQjwg7kzAQQiaAHh0AEQg1ACgbgQQAFAAACgDQADgCAAgFQCggyDIgKIAKAAQAyAAAxgFIABgFQA6ARBRgHIAKAAQAcARA0gHIAKAAQCLALBmAuQA/AcA+AfQAOAIATgCQBAgHALAkQABADgGADQgEACgFAAIgQAAQhNAAg6gRg'
      )
    this.shape_2.setTransform(351.0071, 509.7595)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('rgba(21,32,57,0.455)')
      .s()
      .p('AgOAEIgKAAIAAgJQAQgNAgAIQABAAAAAFQAAAFgCADQgIALgKAAQgIAAgLgKg')
    this.shape_3.setTransform(117.8, 129.3331)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics.f('rgba(31,45,103,0.545)').s().p('AgxAPQApgXAxgOQAEgCAFAAQAAAFgCABQgwAXgxAUIAAgKg')
    this.shape_4.setTransform(95.3, 118.25)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics.f('rgba(20,31,57,0.608)').s().p('AgLARIgKAAIAAgKIAAgTQBGgQgsArQgCACgEAAIgKAAg')
    this.shape_5.setTransform(127.5131, 130.025)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#182557')
      .s()
      .p(
        'AhKgTQAKgFALgEQAEgBAFAAIAKAAQAAAFgCABQgIAEgKAAQAQAgA9gSQANgEATAAIAKAAIAKAAQgQAXgjADQgTADgRAGQgMAEgKAAQghAAgHgxg'
      )
    this.shape_6.setTransform(119.8, 132.7974)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics.f('#A7CAD9').s().p('AgsApQBDhRAWgJIAAABIAAAUIAAAKQg4AkgaAYIgHAIIAAgJg')
    this.shape_7.setTransform(58.8375, 155.675)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#F3F2F6')
      .s()
      .p('Ag7AtQgxgGgkgaQgFgDAAgKIAAgTQBsguCEAYIAcAFQAcAFADAfQgCArgwACIgUACQgfADggAAQgkAAgogFg')
    this.shape_8.setTransform(225.3, 97.7243)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics.f('#8E8DA8').s().p('AgBgEIABADIACADIgDADIAAgJg')
    this.shape_9.setTransform(430.475, 349.2625)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#3E9ADE')
      .s()
      .p('AiCAyQBNhIBBhVQACgCAFAAQAPAKAegZQASgPghAAQAhgYAkAPQAiAPgsAgQgJAHgHAIQhkB2hnB1IgEAGQgXgmAIhDg')
    this.shape_10.setTransform(377.4053, 366.7709)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#E8E8EE')
      .s()
      .p(
        'AibJXQgtgBiIgMQiHgNighdQi7hthXjPQgNgdgGgeQgOhBAAhKIAAgKQAAhQAEg5IAHhUQAIgPAKhKQAGgngTgPQgXgSgZgNQhCgfAIhoQAigrAJAjQAHAcAJAbQAHASARAMQA1AmAsAtQgUBGAABaIAAAKIgEAiQgEAegBAeIgBAzIAAAZIAABjIAAAKQAKCMBDBTQCDCkDVBSQBQAfB4ACQB5ADA+gCQA9gDBGgGQBIgGBeg3QBfg4BJhNQBIhOAehyQAIghAFgiQAAgGAEgGQAbgwAMhEQADgLASgFQAqgKgBg4QASgbgHg1IgBgKQAgg6BGgOQAmgIAoAEQBjAIBHAmQAgAsgGBMIgCALQgOBQAeAnQASAgABA5QABBLgNAEQgYgVgLgOIgWgeQgLgQgGgOQgHgNAEgaQADgbgDgbQgFgagCgZQgDgZADgMQACgMAFAAQAWgjgSglQgEgIgEgDQghgUghgRQgPAAgOgDQhigbg+AzQgGAEAAAGQgFBKgKBBQhHAigSBVQgTBcgbBQQgLAggQAZQhyC0jNBZQhpAuiPAGQgjAEglAAIgPAAg'
      )
    this.shape_11.setTransform(255.1802, 369.2464)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f('#E5E5EC')
      .s()
      .p(
        'AJ7JaQBlgxAqhuQAMgfAehGQAehGAQhlQAQhlAFhQQAKg+AIgXQAJgfABgjQAAgkgFgEQg8g3hBgzQgFAAgEgBQhHgThaAAIgKABQg5AHghgSIgKAAIgUAAQAAAFgBABQgnAJgoAFQgFAFgGACQgJADgGAFQgbAXgugHQgYgDgOgYQgig+hFggQgEgCgdgGQgcgGgxgGIgKgBQghgGgkgDIgKAAIhQAAIgoAVQg1AbhDAMQh5heidg9Qhqgph+gYIgKgBQgzgNgxgQIgKABQgxADgLgiQBpAABpAFIAAAFQB+AYBpAqQCOA4BrBYQAgAMAtggQApgcAqgCIgHAAIAKAAIAjgCQAegCAYACIAbACIBRAIQApAEAwASQBiAhAxBTQADAEAHgEQA7gjBUgLIBaAAIAKAAIAKAAIAKAAQB2gCBQAkQACABAAAFQA0AXAsAgQAuAhAcA0IAAAKQgFBbgJAkIgNA5QgFATgBAQQgBAPgDAYIgIAyQgFAaAAAFQgFA1gHAhIgSBNQgKArgZA4QgUAsgTAlQgvBXhBBAQgWAWgPAAQgXAAgEg4g'
      )
    this.shape_12.setTransform(333.8, 369.5358)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f('#1698E6')
      .s()
      .p(
        'AA7GkIgLigQgDg3gJguQgRhigShaQgwj4hwi2QAZAKAZAIIAmALIAGABQAXASANAWQBABVArBwQAaBEARBVQAOBFAHBHQAIBPADBLIAGBzQACAogBAKIgBAUQgCARgaACIgSABQgzAAgDgogAhKmxIgGgGIAHAFIAIAFIgJgEg'
      )
    this.shape_13.setTransform(403.3398, 197.7766)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics.f('#72C3F3').s().p('AgxgEIBZAAIAKAAIgBAEQgxAFgxAAIAAgJg')
    this.shape_14.setTransform(334.3, 501.25)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics.f('#83C5EE').s().p('AgsgFQAsAAAsAFIABAEIgKAAQgPACgNAAQgfAAgUgLg')
    this.shape_15.setTransform(358.8, 502.375)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f('#FBFAFA')
      .s()
      .p(
        'AB1EdQhZgRhZgGQhQgFhGAKQgQACAGgVQAigqAGhEQAIhdgKhMQgIhGAGhQQAFhAAdguQBEAHAYA0QADAGAFAFQCWCQBbDHQASApAKAtQALA2gLAaQgSAEgWAAQgbAAgigHg'
      )
    this.shape_16.setTransform(357.4746, 425.9722)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics.f('#A0579C').s().p('AAABaQgEhaAAhZIAJAAIAACpIAAAKIgFAAg')
    this.shape_17.setTransform(30.8, 405.75)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f('#B5DCF3')
      .s()
      .p(
        'AHfA0Ih2glQjfhEkzAKQiTAFiFASQhpAPgtguQAKgFAKgDQAFgCAFAAQAAAFgDADQgCACgFAAQAcASA0gCQB0gECagIQEzgRDwA8QBAAPBDAUQBAATBXgCQggAOgiAAQgbAAgcgKg'
      )
    this.shape_18.setTransform(349.3, 513.9045)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics.f('#9D478A').s().p('AAZAKQgnAAgUgTQAyAAATATg')
    this.shape_19.setTransform(174.8, 569.7494)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#9C478A')
      .s()
      .p(
        'AH2TyIkYgWQhmgHhhgSQh7gViIgUQh+gShzgjQjkhDi2hxQi2hxixh2Qiwh3h+ipQh+iphbjLQhcjLAAknQAPg7AFhHQAMjAAZiyQAEgdATgLIAAgKIAAgKQAcgWAQgkQABgCAFAAIAAgKQBqhsCkgyQAFgCAFAAIAAgKQB4gdCWABQCIACBpAfQBFAUA8AZIgKAAIgoAAQAWAXAvgIQABAAAAgFQA/ARA3AbQACABAAAFQBBAFAUAvQAMAegRAIQgBB+AUBoIABAKQA+DpCjCFQAmAfAoAcQBzBSCEA/IC0AgQBwAUB+gIQA7gDCjgbQA2gQAygTQBLgjAAgEQCjg9BJicIAHgPQANgkAYgWIAAgKIAAgUQAqhXAXhwQAAgBAFAAIAAgKQAvgRARgzQABgCAFAAIAAgKIAAgeQARgIgCggIAFAAIAAgKQA2gSBAAXQACAAAAAFQARAhgEA5QgDAyAAAyIgTgLQgGgEgFABQhFAFgZA0QgOAdgIAdQgiB3g4BdQhvC5jdBOQgNAEgPAIQiqBcj4ARQipAEgQgEIgLgCQhzAAhLggQgkgQgjgLQh0gmhXg9QgugfgigoQiKieh+ipQg4hKhFg9QidiKkrgCQjkgBh3BlQgoAjgmAkQgoAkgSA0QgQArgLAsIgKAAQAABaAFBaIAFAAQADCUAeB5IAFAMQAsBhA0BZQAPAcAfAOQA4ARAag4QADgGAFgFQAFgEADgFIA3gwIABAcQgCgLgMAAQADAvAWAcIADgGQACgEAKAZQBsC7CvB2IAfATQAPAHAIALQAhASAcAOIAYAIQBjAbBvAjQDjBIDxA0QD1A0EIAXQEbAYEegaQCCgMCCgXQELguERAtQA9AKAyAZQBFALAyAfQAGADAFAAQAVgBgHANQhHCIiPBDIj7B3QhmAwh/AZIiAAcQioAmjDAAQhSAAhXgHgAGtTCIBIAEIA9ADIA8AAIAKAAQAAgFC+gFIABAAIAJAAQCVgPCEgfQBrgZBjgkQDWhMCLidQgVgigwgKIgMgCQg4gMg/gFQhugJh3AaIgMACQiGAThyAnQg2AShMAIQiMAPiDgPQjLgHhrAFQm0gPiFgKQgegDgcgIQhLgXglAzQAHBEA0AYQAGADAFAFQBQBGBuAoQBjAkBuAYQA1AMA5ABQBGACAyAPIBSAGIAwAEIAeAAIAAAAIAlADgAlRR5QAUAUAoAAIAKAAQgTgUgxAAIgCAAgAixLVIAKAAQg3gZhVgFQA0AcBOACgAotJ7QAMAWAmgBIAKgBQgMgUgoAAIgIAAgArXJJQAMAWAmgBIAKgBQgMgUgoAAIgIAAgApWtWIABAKQAdgtgngjQAHAhACAlgAsJyMQAcARAhAKIAJADQgOgeg2AAIgCAAgAxTzmQA4AUBAAJIAKABQgqgehQAAIgIAAgA1NzmQAMAYA6gKQATgEALAAQBNgCA1gSIgKAAQhzAAhpAKg'
      )
    this.shape_20.setTransform(205.111, 454.2044)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f('#D8EDFA')
      .s()
      .p(
        'AF/BBQhrgmiGgWIgfgFQh+gUiaAFQhoAEhCgCQhVgDhUgKQgBAAAAgKQB9gZCIgKQCbgLCGANQCMANBtApQBSAfBhAVIAMACQAtACgaAWQgWAOgeAAQgdAAgkgMg'
      )
    this.shape_21.setTransform(361.2727, 486.4368)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics.f('#593D7D').s().p('AiQgBIEXAAIAKAAQgyAChVABIgRAAQhLAAg+gDg')
    this.shape_22.setTransform(255.8, 476.9276)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f('#1293E3')
      .s()
      .p(
        'AWIITQgGgFgJgDQhngsiKgQQiQgRh+AJQiNAKiKATQgdAEggABQgwABhJAIQhKAIhCAFQiKAKiNgDQkigGjxgvQiEgZh1gdQjwg7jdhHQjihIiIigQgGgIgJgHQh5hhAAjcIAXhZQAhh9Bog4QA4gdBdAOQAXADAbAGIAMADQAOADA+AgQB1BjB3CxQBCBiB1A1IA1AXQDOBXD0A1QC0AmDcACQCEABCTgIIALgBQEJgiEJgcQBugMCgAFQBEACA+AGQCIAPBlAvQA1AYA9AQQAaAGADgWQAFgmAjASQAfAnAKA1QAEASgJATQgPAhgfASQhWAphYgsQgtgXgzgPQjihEkwAMQiOAFiBASQiGAUiRADIh5AEQkuAQkKghQiBgQh5gdQjvg5jFhmQhggxhKhNQhBhEgshZQgYgxgjgjQgkglgyAXQguAeABBQIABAUIAEAyQBgCfCsBVQDDBhDlA8QB8AgB8AXQCCAXCCAVQCBAUCXgDQEdgGERgaIALgCQCHgSCHgOQBFgHAzAAQBqgBBoAHQCNAIB1AlQBkAfBfAjQAzATBBAIQALABAGAMQARAfgDAvQglBJhnAEIgUAAQhhAAg5gqgAV5GxIB1AlQA+AUA8gYQAFAAAEgCQAGgDgBgDQgLgjhAAGQgTACgOgHQg+ggg/gcQhmgviLgLIgBgFQgsgFgtAAIgKABQhSAGg6gRIgKAAIhaAAIAAAKIgKABQjIAKigAxQgFAAgFACQgKADgKAFQAsAuBqgPQCFgSCTgFIBPgBQECAADCA8gAT2CPIAfAFQCHAWBrAmQBKAZArgbQAagWgugCIgLgCQhhgVhTggQhtgpiMgNQiGgNicALQiIAKh8AZQAAAKABAAQBUAKBVADQBBACBpgEIA6gBQB4AABmARgA1tnFQBHAiA4AxQAIAHAFAAQAiABgYgpQgvhUhWgoQghgPgrgIQg9gLgeAcQgFAAgDADQg4A6gkBPQAFAFACgBQA2gXAzgaQAqgWAsAAQAaAAAaAHg'
      )
    this.shape_23.setTransform(245.3231, 472.1419)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f('#0064B1')
      .s()
      .p('AmwCBQgCgEAAgFQCjiDCeiJQCAhvCChuQCnATByBFQAEACAFAAQhEBShOBJQiaCMiVCQIjcDSQiFhXhBiag')
    this.shape_24.setTransform(220.8, 366.75)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#3C97DD')
      .s()
      .p(
        'AjbDGQgKhEAAhGQAFgFAGgDQAEgCAFAAIAAgKQBAgzA7g4QACgCAFAAQBMg5A1grIAAgFIAAgFIANgGIALgDQA3gRBQAMQAiAGgVAUQgoAngNAGQgqAogMAJQijCAihCHQAAAFgCABIgHADIgBgBg'
      )
    this.shape_25.setTransform(198.2891, 346.7514)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics.f('#9C488A').s().p('AHMPeQhOgCg0gcQBVAFA3AZgAldvAQhAgJg4gUQBWgBAsAfg')
    this.shape_26.setTransform(141.3, 427.7466)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f('#9E488A')
      .s()
      .p('ABQN6QAvgCANAWIgKAAIgFAAQghAAgMgUgAAopXQgCgmgIggQAoAjgeAtgAhOtyQgggLgdgQQA4gBAOAfg')
    this.shape_27.setTransform(141.3, 428.7794)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f('#974688')
      .s()
      .p(
        'AkeJ6IgDAGQgVgcgEgvQAMgBACALIgBgbQAFAIABALQADAiAEAJQAEAKAKAjQgKgZgCAEgAD1qOIAoAAIAKAAQAKAAAIAEQACABAAAFQAAAFgBAAQgMACgKAAQgeAAgRgRg'
      )
    this.shape_28.setTransform(94.8, 400.25)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f('#FBF9FA')
      .s()
      .p(
        'AkuBhQgIgPACgbQA1hWBUg5QADgBAAgFQBYgeBcAOQA0AHAvAFQAxAFAfATQBGAnAqBBQAPAWgRADQgfAngvggQhghAiRAeQhcAUhHAqQgmAYgyABIgCABQgTAAgMgTg'
      )
    this.shape_29.setTransform(92.2397, 387.2547)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics.f('rgba(6,2,45,0.745)').s().p('AAABzIgBgKQgNhCAEhTQARgWgDgwIAFAAIABAKQAHA0gRAcQAHBCgDBJg')
    this.shape_30.setTransform(8.3688, 406.25)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f('#9D488A')
      .s()
      .p('AEdOTQAwgCAMAWIgKAAIgFAAQghAAgMgUgAlYucQBpgKBzAAIAKAAQg0ARhOACQgKAAgUAEQgRADgOAAQgfAAgIgQg')
    this.shape_31.setTransform(103.8, 421.2798)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics.f('#0F4D96').s().p('AAAAsQgEgsAAgsIAJAAIAABPIAAAKIgFgBg')
    this.shape_32.setTransform(38.8, 297.25)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics.f('#1272BE').s().p('AgGCRIAAkrIAJAAQAABQADBPQAEBXgQA/IAAgKg')
    this.shape_33.setTransform(40.0122, 270.25)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics.f('#1166B1').s().p('AAABuQgEhuAAhtIAJAAIAADRIAAAKg')
    this.shape_34.setTransform(21.8, 255.75)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics.f('#7B7A9C').s().p('AgaAMIAAgKIAAgJQAigYAUATIgHADQgZANgWASIAAgKg')
    this.shape_35.setTransform(97.05, 129.5802)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics.f('rgba(31,47,105,0.58)').s().p('AgiAKQAegOAegNQAEgCAFAAQAAAFgCACQgdAVgmALIAAgKg')
    this.shape_36.setTransform(86.8, 122.75)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f('#DDDBE0')
      .s()
      .p('Ag2AAQAKAAAIgEQACgBAAgFQAYAUANgVQACgEAAgFIAoAAIAKAAIAAAUIAAAJQgTABgNADQgXAIgPAAQgdAAgKgVg')
    this.shape_37.setTransform(119.8, 130.8087)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f('#1595E5')
      .s()
      .p(
        'ArKOdQgFhUgJhMQgMhnABh1IAAgKIAAjSIAAgKIAAhQQASg5AFhJQAEhEASg1QAmhzAuhtQALgdAPgbQBEh9BhhdQgOANAOgOIAIgHQAZgZA5glQASgQAxgWQAwgWAFAAQguApgTAYIg0A8QggAmhJB8QhJB7hDDmQhCDigLEbQgFCCACCWIABAyQAEBYgrAgQgXgGgCgYgAo5N/IAAgKIAAhQIAAgKIAAg8QASg+gEhYQgEhQAAhQIAAgKIAAiCQANgqAIgwQAnj+BNifQBOifBKhlQBJhmBThbQBThaBRg1QAGAfAlgaQBCguBZgaIBwggQClguDXAFQh8CNgkDdQgrEFAOEfQAFBUAEAsQAHBUgCBrIAAAKQACBQAJB4QAGBNgMA1QhQAKhHAMQkCAsjjBIInCCOQgTAGgNAAQgNAAgIgGgAC+tCIAAAKQgFAAgEACQgLADgKAFQAJBCA2gTQARgHAUgCQAigEAQgYQAFAAADgCQAsgshIAQIgKAAIgoAAQAAgFgBAAQgMgDgKAAQgRAAgKAIg'
      )
    this.shape_38.setTransform(96.2917, 212.2252)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics.f('rgba(24,41,91,0.518)').s().p('AgOAeIAAgUQAQgRAIgfQAAgBAFAAIAAAKQgCAugbAXIAAgKg')
    this.shape_39.setTransform(21.8, 191.75)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f('rgba(25,24,35,0.306)')
      .s()
      .p('AgDAOQgRgCAHgaIAKAAIAJAAQAFAAADACQACADAAAFQAAAEgCAEQgDAGgFAFIgJgBg')
    this.shape_40.setTransform(280.6979, 121.25)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics.f('#E4E5EA').s().p('AgNAfQgzgIgUgmQA/giBNAgQAEACAFAAQgHAaARACIAKABQgYAUgqAAQgQAAgQgDg')
    this.shape_41.setTransform(272.8, 121.3594)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f('#142454')
      .s()
      .p(
        'Ah1gKQBUhRB7BBQACABAAAFIgKAAIgKAAQgFAAgFgCQhMggg/AiQAUAmAyAIQBCAKAhgbQAFgFADgFQACgEAAgFIAJAKQAWAegrANQgtANglAAQhSAAgrhCg'
      )
    this.shape_42.setTransform(272.1223, 121.8302)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f('#0064B0')
      .s()
      .p(
        'AgaLVQAAgcgCgXIgNhuQgKhDgFhIQgDg8gFgzIgLh4QgXjbAEjvQAQg8AGhGQALh2AhheQAhheBGg2QABAhANgVQABgCAFAAQhWCKgRDTIgBALQgFD1ABD0IAAAeQACAvAIBTQANCHAKCQIAAAKQgHAnASBGQAQBBgqAbIgEAAQgbAAAAgeg'
      )
    this.shape_43.setTransform(166.7632, 197.2589)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics.f('#0170C0').s().p('Ag0AjIAAgKQAtgnAwgiQASgMgJAKQgqAvgoAwQgFAAgBADQgFAIgDAAQgFAAgBgVg')
    this.shape_44.setTransform(179.5778, 118.2329)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f('#E4ECF4')
      .s()
      .p('AmjBwQChiFD3g1QBigVBxgMQBsgMBwgIQhFAyhIAvQgEADgFAAQjXgFikAsIhwAgQhZAbhCAtQgRAMgLAAQgMAAgDgQg')
    this.shape_45.setTransform(143.3, 119.5732)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics.f('#46AFF1').s().p('AgZAOIAAgKQARgDAHgOQABgCAEAAQAhAAgSAPQgUAQgOAAQgFAAgFgCg')
    this.shape_46.setTransform(381.8676, 354.3949)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f('#0065B2')
      .s()
      .p('AjvCKQgCgEAAgFQCPiYB+inQAjguAxgcQALgGAOAEIAzAQQBVAVgxAtQgQAOgNARQiECiiACmQgjAtgfAxQhCg2gqhNg')
    this.shape_47.setTransform(389.4859, 378.883)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f('#E79FEC')
      .s()
      .p(
        'AINQxIg8AAIg9gDIhIgFIglgCIgeAAIgwgEIhSgGQgygPhGgCQg4gBg1gMQhvgYhjgkQhugohQhGQgFgFgGgDQg0gYgHhEQAlgzBMAXQAbAIAeADQCFAKG0APQBrgGDLAIQCDAPCMgPQBMgIA2gSQBygnCGgTIAMgCQB3gaBvAJQA+AFA4AMIAMACQAxAKAUAiQiLCdjWBMQhiAkhsAZQiEAfiVAPIgJAAIgBAAQi+AFAAAFIgKAAgAIhBJIkYAAQh+gJhygUQh3gVhvgYQjyg4idiLQgFAAgDgCQgWgXgUgZQgFAAgCgCQgNgNgKgPQAAgFgCgDQgqgwgkg2QhHhKhKhGQhEhAh4gLIgPgBIghgCQgagDggADQgfACgJADQjEA0gwDNQgHAegBAeQgBA4gFBXIg3AwQgDAEgFAFQgFAFgDAGQgaA4g4gRQgegOgQgcQg0hagshhIgFgMQgeh5gDiUIAAgKIAAiqQALgsAQgrQASg0AogkQAmgkAogjQB4hlDjABQErACCeCKQBEA9A5BKQB9CpCKCeQAjAoAtAfQBYA9BzAmQAjALAkAQQBMAgByAAIALACQAQADCpgDQD4gRCrhcQAOgIANgEQDdhOBwi5QA3hdAih3QAIgdAOgdQAZg0BGgFQAEgBAGAEIATALQA8CWB2BdQACACAAAFQANAbAYARQADABAAAFQBgBkBRBwQADADAAAFQAKAKAHAMQADADAAAFQBJBNAQCFQAQCCAjBtQgFAAgEgBQiig0jRgHIgKAAIiqAAQhogDhWAIQkQAckCAlIgKAAgAVVirQBaAFBZASQA9AMAogKQALgZgLg3QgKgtgSgpQhbjIiXiQQgFgFgDgGQgYg0hEgHQgdAugFBBQgHBQAJBGQAJBNgIBcQgGBFghApQgGAWAQgDQAugGAyAAQAaAAAcACgA1yuUQAAAFgCACQhVA4g1BXQgCAcAIAOQAMAUAVgBQAygCAngXQBGgrBdgUQCRgfBgBBQAwAgAegnQARgDgOgWQgqhBhHgoQgfgTgxgFQgugEg1gIQgegEgdAAQg+AAg8AUg'
      )
    this.shape_48.setTransform(214.8, 469.4489)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f('#823B7C')
      .s()
      .p(
        'AFaBxIgIgEQhig3hugiQgcgIgdgGQhQgNhYAZQhDAThVAFQh1g5h5g4QgCgBAAgFQCvg7BtANQBuANArACQArADAsAJIBaASQAvAJBNAKQAmAFAiAPQA/AcAyAoQATAPAPATQAjArghAQQgbAFgZAAQgpAAghgOg'
      )
    this.shape_49.setTransform(333.0882, 311.586)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f('rgba(25,152,229,0.996)')
      .s()
      .p(
        'AeTB5QgzhLhIguIhOgxQhYg8hxgpQgMgFgLgCQgogGgegIQiwgvjVgEQiWgDiVAHQkUAOj0A3QjsA1j9AuQh9AWh/ARQkKAhkHAdQkNAektgIQiRgEiRAAQhQABgogkQEFgiEDgjIAfgFQBPgPBQgKQAqAOA8gIIAIgBIAAgFIAKAAIABAAQCaAEB+gQQCLgSCLgPQCEgOB4gYQCDgZCKgQQEFgcEVgaQEHgZEqAJQBvADB3gJIApACIAJAAIAcACIBTAIQA9AHBjAZQDvA+CQCWQBKBMAMCJIAAA+QgYhHg0hKg'
      )
    this.shape_50.setTransform(335.8, 279.325)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f('#0066B2')
      .s()
      .p(
        'EAkNAEYQBWgjBDg6QgEiRhRhGQieiJjkg/QhpgchpgVIgJgBQiFgMiJgIQjAgLifAVQkJAjjsA2QjzA5j/AqQj6AqkOAUQkWAWkZALQkGAJjtgVQg9gFg6gSQgigKgXgbQgPgTgKAYQkCAkjVBQQhqAohvAmQgyARg9AMQgGABgGADQgxAbgogPQDOhZDghIQDehHD3gyQALgCAKgFQAuAJAeAYQAXASApADIB4AHQD6AOE2gMQCLgFCNgKQERgUEAgpQD7gpD4gzQB5gZB5gdQDvg5EYgOQEbgOECAqQBBAKBAAOQDwA1CbCLQA7A0AvA/QAoA2AQBMQADAPAAAPQg8BQhkAoQhWAihWAeQgSAGgUAAQBOgqBZgjg'
      )
    this.shape_51.setTransform(283.3, 297.0889)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f('#DFEAF4')
      .s()
      .p(
        'A0KBqQAqgJAdgKQAEgBAFAAQAAgDAlgEIACABIAygCQAWgEAegEIAFgBIgEAAIAdgDQB+gOCEgXQD3gpEIgeIEhgfIBNgHIAkgDIAmgCIBEgDQAhgDgEAAQAMgCAKAAIAngBQAhgBATgEQASgEANABQANAAAPgBIAKAAIAHAAIDfgKICgAAIAKAAIBQAAIAKAAIA8AAIAKAAIBsAGIBrAJQBMAGgKABIgJgBIgqgBQh3AJhvgEQkqgIkHAYQkUAakGAdQiKAPiCAZQh5AYiDAOQiMAPiLARQh+ARiagEIgBAAIgKAAIAAAFIgIABQgVACgUAAQgiAAgbgIg'
      )
    this.shape_52.setTransform(334.3898, 262.1869)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f('#1494E4')
      .s()
      .p(
        'AxjHGQgWkMAGilQAGijgBgzQAAg0ADgbIADghQAAgtAGglQAMhBARg+QAyi1CRhaQAvAHBSgOQA6gLBTACQBGABBGgCQEqgHD8AmQBFALBEAMQCxAhCvAoIBvAwQAEACAFAAQBCAxA7A4QCYCPBbDLQAvBoATCFQATCAAHBXQAHBWACA2QACA2gBA+QgxAQhHACQkaAFkMAZQkPAakDAgQkJAhj+ApQj/Aoj1AyQgeilgPi5gAj4q3QA+BgCSgrQAqgMgVgfIgJgKQAAgFgDgDQgCgCgFAAQAAgFgCgBQg4gdgvAAQg7AAguAtg'
      )
    this.shape_53.setTransform(285.2308, 190.3706)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f('#DBDFE9')
      .s()
      .p(
        'AZ+B8IgngLQgZgIgZgKQgFAAgBgCQguhchOg3IAAgKQAFAAgKgTIADACIgDgDQB9BMAgArQAgArAZAlIAHAGIAIAEIgFgBgA6CBpIAAgUIABgBQCNhwCfheQAEgCAFAAIAAAKIAAAKQgFAAgEACQhhBIhUBVQgFAAgxAWQgwAWgSAQIAAgKg'
      )
    this.shape_54.setTransform(230, 142.275)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f('rgba(10,7,59,0.992)')
      .s()
      .p(
        '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'
      )
    this.shape_55.setTransform(277.0398, 338.272)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Layer28, new cjs.Rectangle(7.2, 87.2, 538.5999999999999, 502.2), null)
  ;(lib.Layer27 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Layer_2
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f()
      .s('#09073C')
      .ss(7, 1, 1)
      .p(
        'AkWBKQAKgSCMACQCLACBKgPQBJgOA1gwQA2gwBRgpQBRgpAogBQAogBAPgBQANABAJAEQAJAEAHAEQAGAEALAPQALAOAAAsQAAA8g9AxQgjAchJAjQkhBFiVAHQgTAAgRAAQgMAAgKAAQAUABAeACQAVABAOABQAXABAGAAQA5AAAsgEQDnACBlg1QBng1A3AEQA2AFAYAaQAXAZAAAlQAABiioAmQhrAYi8ABQgHAAgHAAIATABIDKAWQCTgVAwgEQAwgEAXAXQAWAWAMAPQAGAAAEARQACALADAUIABAQQAAAJgBAIQgTBlhnAdQiiAuimAlQihAlijgnQikgmiogWQiigUiGhfQhQg6hegZAqqklQBWAfB7hRQB7hQAagqQAagrAXgjQAXgkAoiCQBoAPASBcQARBcgCBgQgCBgg5A0Qg4AzgrA0QgsAzgFBAQgFA+AJA8AhyC5QhogwgdgaQgegagBgLAhnC6QAKABAQABAhsC6QACAAADAAAD8FYIljie'
      )
    this.shape.setTransform(132.575, 174.2632)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f().s('#09073C').ss(6, 1, 1).p('AAJABIhBAKQBZgRAYgE')
    this.shape_1.setTransform(151.85, 192.175)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.f().s('#05104D').ss(8, 1, 1).p('AgbAIIAugLIAJgE')
    this.shape_2.setTransform(155.55, 191.5)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#873E7F')
      .s()
      .p(
        'AAfDVQilgmingWQijgUiFhfQhRg5hdgZIgFhKQgDgCgBgCQgagwADg+QAZAJAXANQASAKARAMQB1BOA3AQICHA+QDnBJDuAsQE+A8EyheIA2gSIADgHIAigIIALgLIAXgFQgUBlhnAdQiiAuilAlQhPAShPAAQhTAAhTgUg'
      )
    this.shape_3.setTransform(130.9388, 221.9632)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#E1A0EC')
      .s()
      .p(
        'AA3JxQjtgsjnhLIiIg9Qg3gQh0hOQgRgNgSgKQgYgMgZgKQABlSBZiDIAwhEQBWAfB7hQQB7hQAagrIAxhOQAXgkAoiCQBoAPASBcQARBcgCBhQgCBgg5AzQg4AzgrA0QgsA0gFA+QgFBAAJA8QAKgTCMACQCLACBKgOQBJgPA1gwQA2gwBRgoQBRgqAogBIA3gBQANAAAJAEIAQAJQAGAEALAOQALAPAAAqQAAA9g9AxQgjAdhJAiQkhBFiVAHIgkABIgWAAIAyACIAjADIAdABQA5AAAsgEQDnABBlg0QBng2A3AFQA2AEAYAaQAXAaAAAlQAABhioAmQhrAZi8ABIgOAAIATAAIDKAXQCTgWAwgDQAwgEAXAWQAWAXAMAOQAGAAAEASQACAKADAUIABARIgBAQIgXAGIgLALIghAHIgEAIIg1ASQi7A5i/AAQh7AAh8gXgAEMGXIlkiegAg9D7IgbgCIAbACgAhYD5IgEgBIAEABgAjoCtQAeAaBoAxQhogxgegaQgdgagBgKQABAKAdAag'
      )
    this.shape_4.setTransform(130.975, 168.0438)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Layer27, new cjs.Rectangle(50.2, 99.8, 164.8, 149), null)
  ;(lib.Layer26 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Layer_2
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f()
      .s('#09073C')
      .ss(7, 1, 1)
      .p(
        'AI0CyQBCgEgxj2QgojIlBgtQhTgMhmgBQlcgEiTBZQgvAdgaAnQgDADgCAEQgFAIgEAJQgEAJgEAJQgcA/gMA+QgJAwABAxQAAARABAQQADAfAHAeQABADABAEQABAGACAHQAvCrBQg2Qgeg3ANhcQA+hcAkgXQBgg7BhghQBqglBqgFQBZgFBbASQBOAQB4AyIAaAMQAFACAFADIA5BIIAfApIAUAZIAQAVgAI0CyQAAAAAAAAIAAAAAI1C3IAoA1Igpg6'
      )
    this.shape.setTransform(64.0714, 78.3276)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f()
      .s('#09073C')
      .ss(9, 1, 1)
      .p(
        'ABEp1QCbCkCIBnQAkAgAjAWQBZA5BNgGQA7gFAzgCQAvgIBEAWALrG/QAKALAMAKQARARAVAOQAgAYBHAjQAWALAMAJQANAKAAAHQAAAMgjAJQg1AOh3AAQk2AAjKg4QjQg6jqiPQjsiOjEjiQiJiei3lR'
      )
    this.shape_1.setTransform(113.675, 159.175)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('rgba(248,243,227,0.98)')
      .s()
      .p(
        'Ag3GTQgVgHgagPIgtgaQg/ghgfgSQgUgMgcgUIhig4Ii7hsQglgWgRgLQgdgUgTgVIgCgCIgqADQhkAEghgvQgVgdAKgnQAKgmAggRIAFgDQgVgFgRgOQgUgRgHgXQgHgXAHgZQAGgZARgRQAUgTAhgJQAUgFAogFQAugFBbgPQAfgFAPgFIAcgMQARgIALgCQAcgFAbAQIABAAQAEgIAGgHQASgVAigHQAXgEAnACQEOAPDgAsICtAmQBtAXBZAPQA4AKAiADQAyAFAogEIBKgIQApgBAZASQAZAUADAkQABALgBAJQhTgMhngBQldgEiSBaQgvAdgbAmIgEAHIgJASIgIAQQgcA/gMA+QgKAyABAwIACAiQADAeAHAeIABAHIgEALQgGAcgVASQgTAQgbADIgMABQgUAAgUgGg'
      )
    this.shape_2.setTransform(-2.5095, 63.924)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('rgba(229,157,235,0.98)')
      .s()
      .p(
        'AhoC9IhNgHIgxgDQAogdAwgRQAZgJAtgLQAxgLAVgHIAjgMQAVgHAPgDQAsgIA8ARQAiAKBEAYQAjAKASgHQAQgGAIgQQAGgMgCgMIAoA1IgQADQi9AnjVAAQgWAWgnAAIgVgBgADehhIAKAFIA4BJIAEAGQAPAUAMANIAUAaIAQAVIAAAAQh8icgJgIgACXh7IgjgEQgRgDgYgIIgogNQgogNg1gGQgggDhCgEQgRAAgIABQgOABgKAGQgJAGgFAKIhiADIhOADQBqgkBrgGQBagEBaASQBOAQB3AzQgjgOgJgBg'
      )
    this.shape_3.setTransform(84.925, 89.3547)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('rgba(248,244,227,0.98)')
      .s()
      .p(
        'ApKDJIgDgNIgCgHQgHgegCgfIgCghQgBgxAJgwQAMg+Acg/IAIgSIAKgRIAEgHQAagnAwgdQCShZFcAEQBmABBUAMQFAAtAoDIQAxD2hBAEIgBgBIABABIgBAAIAAgBIgBgDQgDgKgKgKIgRgSIgBgBIAQAVIgUgZIgfgpIg4hIIgKgFIgbgMQh4gyhOgQQhagShaAFQhqAFhqAlQg3gBiKBdQgkAXg9BcQgOBcAeA3QgTANgRAAQg3AAgkiCgAH2BhIgEgHIAfApQgMgOgPgUg'
      )
    this.shape_4.setTransform(63.9401, 78.3276)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#7F3C7C')
      .s()
      .p(
        'ADoK5QjQg6jriPQjriOjEjiQiJiei3lRQgeg2ANhdQA9hcAlgWQCKhfA2ABIBOgDIBjgDQAFgKAJgGQAJgGAOgBQAJgBARAAQBBAEAgADQA2AGApANIAoANQAXAIARADIAkAEQAIABAkAOIAaALQAKAHB7CeIAAABIABAFQABALgGANQgIAQgQAGQgSAHghgKQhEgYgigKQg8gRgsAIQgQADgVAHIgkAMQgUAHgyALQgtALgYAJQgxARgoAdQgRAMgPAOQgyAtgXA5QgFANgEAMQAfA+ApA6QBgCGCHBdQAwAgBdA0IBoA6QBbA0AmASQA7AdBNAdQApAQBiAjIChA4QAwARAaAAQALgBAVgEQAVgEALAAQASgBAOAGQAJAEAGAGIABAAQAJADAQAHIAOADIACABIAMADQALAEAIAKQAIAJABAMQABAHgCAGIgDAKQgCAFAbAGQARARAVAOQAgAYBHAjQAWALAMAJQANAKAAAHQAAAMgjAJQg1AOh3AAQk2AAjKg4gAtxp0QBgg8BggiQhgAihgA8gAOqK9QgMgJgWgLQhHgjgggYQgVgOgRgRQAiAJBTAKQCUASg/A2QgNALgOAIIAAAAgAL7JPIAAAAgAAuoQIgQgVIABABIARARQAJALAEAKIABADg'
      )
    this.shape_5.setTransform(114.278, 146.8917)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#E59DEB')
      .s()
      .p(
        'AKKIaIADgKIAVAWQgagHACgFgAJjHcIgNgDQgRgHgIgDIgBAAQgGgGgKgEQgOgGgRABQgLAAgVAEQgVAEgLABQgaAAgwgRIiig4QhhgjgpgQQhNgdg6gdQgmgShdg0Ihng6Qhdg0gxggQiGhchhiHQgog6gfg9QADgNAFgNQAYg5AygtQAPgOARgMIAxADIBNAHQA3AHAbgcQDWAAC9gnIAPgDIgng6IAAAAQCaCkCIBnQAkAgAiAWQBaA5BNgGIAXAKQCUBGg+hXQAvgIBFAWQh0BqgiCkQgPAtAAB8QgBB4A1BXIgDgBgAgZokIgBgBIABABg'
      )
    this.shape_6.setTransform(123.1, 151.0625)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics.f('#C7A1A1').s().p('AgogGIgXgKQA7gFAygCQAiAvgfAAQgYAAhBgeg')
    this.shape_7.setTransform(179.6798, 135.0982)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    )

    // Layer_1
    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics.f('#64366E').s().p('AAHAOQgLgNgKgOQAhgJgEAcIAAAKQgFAAgDgCg')
    this.shape_8.setTransform(179.7458, 200.7934)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics.f('#62316C').s().p('AATAhQgUgjgXggQAuADACAuIABAKIAAAKQgFAAgBgCg')
    this.shape_9.setTransform(191.7, 216.9)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics.f('#532A63').s().p('AAHASIgLgOIgKgNIAAgKQAegCgBAdIAAACIAAAKQgFAAgDgCg')
    this.shape_10.setTransform(195.7266, 221.3911)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics.f('#622F6B').s().p('AAhAqQgogmgggwQAnAAAOAcIAWArQAEAIAAAKQgFAAgCgDg')
    this.shape_11.setTransform(185.2, 207.9)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics.f('#9A5597').s().p('AgYgFQAYAAAYAFQABAAAAAEIgKABIgPABQgSAAgGgLg')
    this.shape_12.setTransform(211.7, 205.0283)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics.f('#9C5799').s().p('AgEAIQgrAAgRgQIB3AAIAKAAQgWARgsAAIgDgBg')
    this.shape_13.setTransform(282.7, 230.2507)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics.f('#525071').s().p('AgOAFIAAgJQAKgFAJgEQAFgBAFAAQAAAFgCADQgNALgOAKIAAgKg')
    this.shape_14.setTransform(137.7, 164.9)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics.f('#434265').s().p('AgOAKIAAAAIAAgKQAKgJAKgIQAEgCAFAAQAAAFgCAEQgIANgLALIgIAGIAAgKg')
    this.shape_15.setTransform(121.7, 181.4)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics.f('#1C1A49').s().p('AAZAFIg7AAIAAgJQAiAAAjAEIAAAFIgKAAg')
    this.shape_16.setTransform(98.7, 142.9)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics.f('#575373').s().p('AgXgDQARgCAVABIAJAAIAAAEQgWACgTAEIgGgJg')
    this.shape_17.setTransform(67.75, 151.8671)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics.f('#523A75').s().p('AgYgFQAYAAAYAFQABAAAAAEIgKABIgPABQgSAAgGgLg')
    this.shape_18.setTransform(308.7, 195.0283)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics.f('#301850').s().p('AgigEIA7AAIAKAAIgBAEQgiAFgiAAIAAgJg')
    this.shape_19.setTransform(316.7, 227.9)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#873F80')
      .s()
      .p(
        'AkTAVQAygvBHgdQCPgOBKANQAYAFATAHQASAGATgDQALgCAKAAQA9AAgVgjQAyAAAWAdQAJANgSAeQggAxhHAIQjsgMg+ADIgfgBIAAAKQgFAAgFACQgUAIgUAKQgKAFgLACIgKABQgqAAANg6g'
      )
    this.shape_20.setTransform(278.816, 133.2639)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics.f('#9E589B').s().p('AAGASQgQgNgEgYQAVAIAGAVQACAFAAAFQgFAAgEgCg')
    this.shape_21.setTransform(184.7, 189.4)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics.f('#43295C').s().p('AABANQgKgIgBgSQAagHgGAaIgBAKQgFAAgDgDg')
    this.shape_22.setTransform(177.2973, 196.836)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f('#7F3C7C')
      .s()
      .p(
        'AE4EhQgegDgfgGQgTgEgSgGQg0gTg9gMQhAgNgvgaIgzgcQgygbgwgZQhkg0iAgWQhkg7g/hiQgWgggUglQgbgugIhDIAKAAQANARALAVQALAWAPAUQAEAaARAMQAEACAFAAQA/A5BPAmQAhAPAiAMQALADAKAFQAIARAggGIAKgBQBBAKAvAZIAOAJQAsAeAxAbQAGADAFAFQAzArBXALIAMADQB9AgByApQARARArAAQAvABAXgSQA0gMAMgxQABgEgFAAQgVACABgRQAlADAfAMQAbAKABAjQAEBVhPALQgsAGgwADQgfADgfAAQgrAAgsgFg'
      )
    this.shape_23.setTransform(240.0324, 208.7542)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics.f('#B1B1BF').s().p('AAAA2QgEg2AAg2IAJAAIAABjIAAAKIgFgBg')
    this.shape_24.setTransform(169.7, 175.9)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics.f('#474569').s().p('AgigEIA7AAIAKAAIgBAEQgiAFgiAAIAAgJg')
    this.shape_25.setTransform(161.7, 153.9)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics.f('#533670').s().p('AgCgCQACgBADAFIgFACIAAgGg')
    this.shape_26.setTransform(189.45, 145.7495)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f('#843E7E')
      .s()
      .p(
        'AhcBKQgHgrgNgkQAdgQAzABIAUAAQApACAAglQABgRAQgGQAGgCAFAAIAUAAQAFAAAFgFQAhAagIA+IgBALQgCAbgPAHIgYAMQgXAOgoAAIgJAAIg8AAIAAAKQgIACgGAAQgOAAgCgMg'
      )
    this.shape_27.setTransform(319.5444, 220.0021)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics.f('#783A79').s().p('AhKARQAugxA9giQACgBAAgFQAyAFgNBAIgDALQgQA4g5AIIgQABQg1AAgBg4g')
    this.shape_28.setTransform(335.6685, 199.7055)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f('#E59DEB')
      .s()
      .p(
        'AFJJHIh3AAQhygph9ghIgLgCQhXgMg0grQgFgEgHgDQgwgbgsgfIgOgJQgvgahCgJQABgFgBAAQgZgFgZAAQgKgFgKgEQgigLghgQQhPglg/g5QgBgFgBgFQgHgWgVgIQgQgUgKgWQgLgWgOgQIAAgKIAAhGQATgagfgcQgggcAHgjIAHgYIATgrQgXgNgjgLIAOgDIAlgIIANgCIANgDIACgFIADgFIADgEQADgEAFgDQALgIAEgGIA5gbQCfhLBEgiIARgHQBwgkBbg5QAHgEAJgDQBWgdDhg0QCAgJBBAwIAOAJICEBMQAWAjg+AAQgKAAgKACQgUADgRgHQgTgHgYgEQhLgOiQAOQhHAdgxAxQgOBAA2gIQAKgBAKgFQADAzAsAPQAbAJATAVICSCaQBJBMBZA8QAZAQATAWQAEAFAIAEQApAcA9AKQAUADAUAGQAdAKApgBQAIARAhgGIAKgBQAvAHArALQAFACAFAAQAAAFgCABQg/AigtAyQgfgUgfgQIgRgIQgigTg5ADQAAgFgBAAQgZgFgZAAQhDgSg/gSQgOgEgNgGQhHgeg+grQgegVgfgRQgtgYgsAVQALAeAdAMQAGADAFAFQBJBMBpAvQAyAXA9ARQAFACAGADQArAXBCAFQBBAEAxAXQAaAMAUAPIApAeQgGAFgEAAIgVAAQgEAAgHACQgPAGgBARQAAAlgqgCIgVAAQgygBgeAQQgiguhLgLIgpgIQglgIgegNQg/gdhEgcQhqgqhogvQgygXgwgdQgegTghAXQgCBNA9ATIAYAJIGgCxQAFADAGAEQAUAPAogEQgBAQAVgBQAEAAgBADQgLAxg1ANIgKAAgAqUkAIAAAHIAGgCQgEgFgBAAIgBAAg'
      )
    this.shape_29.setTransform(255.25, 171.1427)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics.f('#6B4C8A').s().p('AgYgFQAYAAAYAFQABAAAAAEIgKABIgPABQgSAAgGgLg')
    this.shape_30.setTransform(326.7, 190.0283)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f('rgba(13,9,59,0.98)')
      .s()
      .p(
        'AJ6LAQhCgLg/gNQjyg0ioh/QgKAAgJgDQgGgCgEABQgWAGiogiQABgegfACIgBgKQgDgugugEIAAgKQAAgKgEgIIgWgsQgPgbgngBIAAgKIAAgKQAEgdgiAJIAAgKIABgKQAFgagaAGQgFAAgBgCQgHgPgRgDQAAgFgDgDQgdgoAChIIAAgKIAAhjQAWhEAbg/IgHAXQgHAkAgAcQAfAcgSAaIAABFIAAAKIgKAAQAIBDAbAuQAUAlAWAgQA/BiBkA8QB/AWBkA0QAwAZAyAbIAzAcQAwAaBAANQA9AMA0ATQASAGATAEQAfAGAeADQBLAHBKgFQAwgDAsgGQBPgLgEhVQgBgjgbgKQgfgMglgDQgoAFgUgPQgFgFgGgCImhiyIgYgJQg8gTAChNQAggWAeASQAwAdAzAXQBoAvBqArQBEAcBAAcQAdAOAlAIIAqAHQBKAMAjAtQANAlAHArQADARAbgHQAjAAAigFIABgFQAoAAAXgNIAYgMQAPgHACgbIABgLQAIg/ghgbIgpgdQgUgPgagNQgwgWhCgFQhCgEgqgXQgGgEgGgBQg9gRgygXQhogwhKhMQgFgFgGgCQgdgNgKgeQArgUAtAYQAgAQAdAVQA+ArBHAfQANAFAOAEQA/ATBEARQAIARAggGIAKgBQA5gCAjASIAQAIQAgAQAeAUQABBABEgJQA6gHAQg5IADgMQAOhAgygFQgFAAgFgBQgrgLgvgIQAAgFgBAAQgYgFgZAAQgqACgdgKQgTgHgVgDQg9gKgpgbQgHgFgFgFQgTgVgYgRQhag6hJhNIiRibQgUgUgagJQgtgPgDg0QAUgKAUgIQAFgCAFAAIAAgKIAfABQA+gEDtANQBHgIAggyQASgegJgNQgWgdgyAAIiFhLIgOgKQhBgwiAAJQjiA1hVAcQgJADgHAFQhcA5hwAjIgRAHQhDAiifBMIg5AaQAIgNgagHQgjAeglAdIgKAHQgeAVgmANIgKAAIg8AAIAAAKQAAAFgBAAQh4AUhFBBQgFAAgFACQgKADgKAFIAAAKIAAAKQAAAFgDACIhKBAIg1AwIAAAKQgFAAgEADQgLAHgKAKIAAAKIAAABIAAAJQgFAFgGACQgfAKgCgRQgBgKABgKIABgFQAGgsAWgYQAFgGAEgCQARgKgBgZIAAgDQAAgKAFgFQAqgqAXg/Qg6ggg9geIgMgEQhQgXgxgzIgBgFQgigFgjAAIAAAKQhFAQg6AeIgQAHQiDhEAFgCQBzgkBqgoQASgHAUACQCLAJBVBAQAXASAZAOQAnAWAnAUQApAUAxALQBBAAAegjQAFgFAIgEQAMgFAUgBQA5gEAsgRIATgIQAogVAmgXIASgMQAtgdAzgUQA5gWAzgXIBmgtQAegNAkgHIAMgDQBtgrBmgsQBsguBvgiQATgGAUgBQB0gFBdAUQAeAHAYAOQAbAPBNAbQBJAaBABGQA4A7ABAaQgbCTi5AGQi5AFgOAEQCCCHCQB4IAKAKQATAWAbALQBoAvCRAJIALAAQAzAAAdAPQAFAAADADQBHArAVBeIAAAeQAAAPgGAMQghA8g/AdIgIAEQAABageAyQgVA3g7ARQg9AShPgFQg8gEgUAdIgfAoQgEAFgGABQgqAGgeAMQgRAGgTAFQg3APg6AAQgnAAgogHg'
      )
    this.shape_31.setTransform(209.7406, 175.294)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
          ],
        })
        .wait(1)
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Layer26, new cjs.Rectangle(-91.1, 23.1, 442.29999999999995, 223.3), null)
  ;(lib.Symbol3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Layer_27
    this.instance = new lib.Layer27()
    this.instance.setTransform(571.6, 419.7, 0.6773, 0.6773, 0, 0, 0, 7.3, 90.5)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to(
          {
            scaleX: 0.6771,
            scaleY: 0.6796,
            skewX: -8.2908,
            skewY: -5.2875,
            x: 558.45,
            y: 409.5,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.6769,
            scaleY: 0.6813,
            skewX: -14.809,
            skewY: -9.5277,
            x: 548.05,
            y: 402.5,
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 7.5,
            scaleX: 0.6763,
            scaleY: 0.683,
            skewX: -20.0244,
            skewY: -13.691,
            x: 539.9,
            y: 398.9,
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 7,
            scaleX: 0.6745,
            scaleY: 0.6847,
            skewX: -23.7115,
            skewY: -17.723,
            x: 534.05,
            y: 398.6,
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 7.4,
            scaleX: 0.6715,
            scaleY: 0.6865,
            skewX: -26.163,
            skewY: -21.9605,
            x: 531.15,
            y: 401.05,
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 7,
            regY: 90.4,
            scaleX: 0.6718,
            scaleY: 0.686,
            skewX: -24.3941,
            skewY: -25.0761,
            x: 534.1,
            y: 409.8,
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 7.4,
            regY: 90.8,
            scaleX: 0.6752,
            scaleY: 0.6847,
            skewX: -23.7948,
            skewY: -30.7639,
            x: 535.4,
            y: 421,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.6808,
            scaleY: 0.6811,
            skewX: -19.4214,
            skewY: -26.9039,
            x: 541.15,
            y: 423.45,
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 7.2,
            scaleX: 0.684,
            scaleY: 0.6783,
            skewX: -14.2913,
            skewY: -20.7782,
            x: 548.35,
            y: 424.35,
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 7.4,
            regY: 90.6,
            scaleX: 0.6846,
            scaleY: 0.6764,
            skewX: -8.0104,
            skewY: -12.4724,
            x: 557.95,
            y: 423.55,
          },
          0
        )
        .wait(1)
        .to(
          {
            regY: 90.7,
            scaleX: 0.6819,
            scaleY: 0.6758,
            skewX: -1.8864,
            skewY: -4.4896,
            x: 568,
            y: 423.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            regY: 90.8,
            scaleX: 0.6784,
            scaleY: 0.6769,
            skewX: -0.4727,
            skewY: -1.1212,
            x: 570.65,
            y: 420.6,
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 7.3,
            regY: 90.5,
            scaleX: 0.6773,
            scaleY: 0.6773,
            skewX: 0,
            skewY: 0,
            x: 571.6,
            y: 419.7,
          },
          0
        )
        .wait(30)
        .to({ _off: true }, 1)
        .wait(6)
    )

    // Layer_2
    this.instance_1 = new lib.Tween1('synched', 0)
    this.instance_1.setTransform(507.45, 466.4, 1, 1, 0, 0, 0, -56.9, -32.8)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to(
          {
            regX: -56.8,
            scaleY: 1.0107,
            skewX: -23.3456,
            skewY: -14.9983,
            x: 491.05,
            y: 454.25,
          },
          5,
          cjs.Ease.quadOut
        )
        .to(
          {
            regX: -56.9,
            scaleY: 1,
            skewX: 0,
            skewY: 0,
            x: 507.45,
            y: 466.4,
          },
          6
        )
        .to({ startPosition: 0 }, 32)
        .to({ _off: true }, 1)
        .wait(6)
    )

    // Layer_1
    this.instance_2 = new lib.Tween4('synched', 0)
    this.instance_2.setTransform(447.9, 354.15, 1, 1, 0, 0, 0, -15.1, -71.2)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .to(
          {
            scaleX: 0.8629,
            skewY: -4.9595,
            x: 447.85,
          },
          5,
          cjs.Ease.get(1)
        )
        .to(
          {
            scaleX: 1,
            skewY: 0,
            x: 447.9,
          },
          6,
          cjs.Ease.get(1)
        )
        .to({ startPosition: 0 }, 32)
        .to({ _off: true }, 1)
        .wait(6)
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(374.9, 351.4, 339.4, 176.39999999999998)
  ;(lib.Symbol1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Layer_1
    this.instance = new lib.Symbol4('synched', 0)
    this.instance.setTransform(361.05, 862.65, 1, 1, 6.4104, 0, 0, -272.6, 4.3)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to(
          {
            regX: -278.6,
            regY: -2.7,
            rotation: 13.4781,
            x: 359,
            y: 795.2,
            startPosition: 1,
          },
          0
        )
        .wait(1)
        .to({ rotation: 21.9599, x: 372.15, y: 726.4, startPosition: 2 }, 0)
        .wait(1)
        .to(
          {
            rotation: 28.3416,
            x: 397.8,
            y: 648,
            startPosition: 3,
          },
          0
        )
        .wait(1)
        .to({ rotation: 28.5702, x: 430, y: 563.05, startPosition: 4 }, 0)
        .wait(1)
        .to(
          {
            rotation: 26.7796,
            x: 458.25,
            y: 482.3,
            startPosition: 5,
          },
          0
        )
        .wait(1)
        .to({ rotation: 27.2934, x: 479.75, y: 419.15, startPosition: 6 }, 0)
        .wait(1)
        .to(
          {
            rotation: 30.4016,
            x: 495.8,
            y: 377.5,
            startPosition: 7,
          },
          0
        )
        .wait(1)
        .to({ rotation: 41.1713, x: 509.35, y: 353.2, startPosition: 8 }, 0)
        .wait(1)
        .to(
          {
            rotation: 68.3441,
            x: 525.65,
            y: 342.2,
            startPosition: 9,
          },
          0
        )
        .wait(1)
        .to({ rotation: 96.5403, x: 542.15, y: 341.6, startPosition: 0 }, 0)
        .wait(1)
        .to(
          {
            rotation: 108.383,
            x: 556.95,
            y: 343.85,
            startPosition: 1,
          },
          0
        )
        .wait(1)
        .to({ rotation: 121.804, x: 572.1, y: 350.65, startPosition: 2 }, 0)
        .wait(1)
        .to(
          {
            rotation: 132.892,
            x: 587.35,
            y: 361.3,
            startPosition: 3,
          },
          0
        )
        .wait(1)
        .to({ rotation: 141.587, x: 602.65, y: 375.7, startPosition: 4 }, 0)
        .wait(1)
        .to(
          {
            rotation: 148.472,
            x: 617.95,
            y: 393.9,
            startPosition: 5,
          },
          0
        )
        .wait(1)
        .to({ rotation: 154.034, x: 633.35, y: 416.05, startPosition: 6 }, 0)
        .wait(1)
        .to(
          {
            rotation: 158.629,
            x: 648.75,
            y: 442.15,
            startPosition: 7,
          },
          0
        )
        .wait(1)
        .to({ rotation: 162.505, x: 663.85, y: 472.3, startPosition: 8 }, 0)
        .wait(1)
        .to(
          {
            rotation: 164.322,
            x: 678.9,
            y: 506.2,
            startPosition: 9,
          },
          0
        )
        .wait(1)
        .to({ rotation: 167.279, x: 693.35, y: 544.45, startPosition: 0 }, 0)
        .wait(1)
        .to(
          {
            rotation: 169.899,
            x: 707.35,
            y: 586.8,
            startPosition: 1,
          },
          0
        )
        .wait(1)
        .to({ rotation: 172.244, x: 720.7, y: 633.25, startPosition: 2 }, 0)
        .wait(1)
        .to(
          {
            rotation: 173.04,
            x: 733.6,
            y: 683.65,
            startPosition: 3,
          },
          0
        )
        .to({ _off: true }, 1)
        .wait(4)
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(327.4, 309.6, 553.3000000000001, 668.4)
  ;(lib.Symbol2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Layer_2_copy_copy_copy
    this.instance = new lib.Symbol1('synched', 4)
    this.instance.setTransform(496.15, 726.45, 1, 1, 0, 0, 0, 390.2, 705.6)
    this.instance._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(2)
        .to({ _off: false }, 0)
        .wait(13)
        .to(
          {
            regX: 665,
            regY: 443.7,
            x: 770.95,
            y: 464.55,
            mode: 'single',
            startPosition: 17,
          },
          0
        )
        .to({ rotation: 47.0987, x: 784.75, y: 437.05 }, 2)
        .to(
          {
            regY: 443.6,
            rotation: 94.195,
            x: 826.95,
            y: 461,
          },
          2
        )
        .to({ startPosition: 17 }, 10)
        .to({ _off: true }, 1)
        .wait(14)
        .to({ _off: false }, 0)
        .wait(1)
    )

    // Layer_2_copy_copy
    this.instance_1 = new lib.Symbol1('synched', 2)
    this.instance_1.setTransform(558.35, 570.35, 1, 1, 0, 0, 0, 390.2, 705.6)
    this.instance_1._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to({ _off: false }, 0)
        .wait(19)
        .to(
          {
            regX: 744.5,
            regY: 587.5,
            x: 912.65,
            y: 452.25,
            mode: 'single',
            startPosition: 21,
          },
          0
        )
        .to({ regX: 744.4, regY: 587.6, rotation: -153.0979, x: 926.55, y: 419.6 }, 2)
        .to(
          {
            rotation: -83.2259,
            x: 936.85,
            y: 462.6,
          },
          3
        )
        .to({ startPosition: 21 }, 4)
        .to({ _off: true }, 1)
        .wait(14)
        .to({ _off: false }, 0)
        .wait(1)
    )

    // Layer_2_copy
    this.instance_2 = new lib.Symbol1('synched', 1)
    this.instance_2.setTransform(524.25, 464.05, 1, 1, 0, 0, 0, 390.2, 705.6)
    this.instance_2._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(1)
        .to({ _off: false }, 0)
        .wait(22)
        .to(
          {
            regX: 783.1,
            regY: 675.6,
            x: 917.15,
            y: 434.05,
            mode: 'single',
            startPosition: 23,
          },
          0
        )
        .to({ scaleX: 0.9335, rotation: -42.6613, x: 911.95, y: 409.8 }, 2)
        .to(
          {
            scaleX: 0.8671,
            rotation: -85.3217,
            x: 906.7,
            y: 440.75,
          },
          2
        )
        .to({ startPosition: 23 }, 2)
        .to({ _off: true }, 1)
        .wait(14)
        .to({ _off: false }, 0)
        .wait(1)
    )

    // Layer_2_copy_copy
    this.instance_3 = new lib.Symbol1('synched', 1)
    this.instance_3.setTransform(558.3, 505.4, 1, 1, 0, 0, 0, 390.2, 705.6)
    this.instance_3._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(3)
        .to({ _off: false }, 0)
        .wait(21)
        .to(
          {
            regX: 765.9,
            regY: 619.7,
            x: 934,
            y: 419.5,
            mode: 'single',
            startPosition: 22,
          },
          0
        )
        .to(
          {
            regX: 766,
            rotation: -66.4783,
            x: 934.05,
            y: 419.35,
          },
          2
        )
        .to({ startPosition: 22 }, 3)
        .to({ _off: true }, 1)
        .wait(14)
        .to({ _off: false }, 0)
        .wait(1)
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(461.4, 68, 533.8000000000001, 595.7)
  ;(lib.whole = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Layer_15
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#120540')
      .s()
      .p(
        'AFJCcIgLgCQgMgKgUgIIgpgOQgHgBgEgEQgEgDgEgIIgHgMIgBgBIAEgHIAKgOIARgWQAegoA7gdQAdgPAjgNQANgFAHABQALABAGAKIAEAHIABAAIASALQAGAEADAIQACAHgCAGQgCAIgLALQgiAfglgCQgRAAgLgIQACAKgEAMQgHAQgSAMQARALAGAMQAFAHgBAJQAAAJgFAGQgHAJgNAAIgFAAgAk3BcQgMgDgYgOQgkgWgsgNQgYgHgHgFQgGgFgEgHIgBgCQgEgIADgHQAEgPAVgCQAJAAAWAHQBCAYAhASQALAHAHABQAEAAAJgDQBVgZCOg3QChhABAgWQA2gSAhgGQATgDAIADQAHABAGAFQAFAFABAHIABAFIANgJQAQgMAHgBQAOgDAJALQAJALgFAOQgCAHgMAKIgEADIgaASIgdAVQgUAPgZAbIgjAlQgTAWgLAUIgHANQgEAHgFAEQgNAHgMgFQgNgGgBgOQgBgKAIgOQANgYAUgZQAYgfAjghIAQgPIASgPQhjAaiiBAQi9BJhLAXQgWAIgPAAIgJgBg'
      )
    this.shape.setTransform(916.6714, 471.9586)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#E89FED')
      .s()
      .p(
        'Aj+FsQgDgMABgMQg8AIgrAIIgeAFQgRACgNgEQgTgFgOgQQgOgQgBgUQgBgYAUgjQASghAWgXQAKgLAOgKIgWgDQgmgGgRgOQgMgLgGgRQgFgQADgRQACgNAGgMQgEgHgCgJIAAAAQgOgKgHgPQgHgPACgQQABgRAKgOQANgTAqgUIAFgCQgggLgggOQgWgJgHgLIgEgJIgDgKIgFgMQgDgHABgGQAAgHAHgGQAFgFAIgCQAIgCAVABQAGgQANgMQAIgJAKgFIAEACQAEAHAGAFQAHAFAYAHQAsANAkAWQAYAOAMADQARADAdgKQBLgXC8hKQCjhABjgbIgSAQIgGADIgcAQIgbAjQgMAQgCAJQgUAagNAYQgIAOABAKQABAOANAGQAMAFANgHQAFgEAEgHIAHgNQALgUATgWIAjgmQAZgbAUgPIAdgVIAagSIAHgDIACgBQAMgIAKABQAvgQA8gFQAUgCAJAFQAJAFACANQABANgIAHQgIAIgYACQg5AFgtARIgDACIgrAlQg6AfgfAoIgRAWIgKAOIgEAHIABABIAHAMQAEAIAEADQAEAEAHABIApAOQAUAIAMAJIAFAEIANAOIAJAMQAKAOABAHQACAPgLAIQgMAKgNgGQgIgEgIgKQgHgLgFgGQgFgFgJgFQgMgGgTgGIgDgBIAFAGIAHALIAGANQAHARAFAIQAFAHANALIASARQANASAAAYQgBAYgOASQAPAHAKANQALANADAPQADAQgFARIgBADQAPADAKAGQANAIAIAOQAIAOAAAPQABAPgHAOQgHAPgMAJQgNAIgSAEQgLADgXACIgeACQhJg1hxhKQkGCKhZA/QgJgKgFgOg'
      )
    this.shape_1.setTransform(914.9583, 497.3839)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AhhAqQgGgLADgPQACgMAIgMIAEgHIAMgLQAegWARgFQAPgEAdADQAuAGAlAKQAFALgIALQgIAMgPgBIgQgEQgGgCgOgBIgbgBQgYAAgLAHQgHADgIAIQgGAHgBAFIgEANQgCAJgCAEQgHANgOAAQgOAAgIgOg'
      )
    this.shape_2.setTransform(909.8157, 511.7607)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#120540')
      .s()
      .p(
        'AhTHOQgKgJABgPQAAgLAIgNIABgDQANgUAjgZQARgMANgGQAogUBMANIAUAFIAxAKIAEABIALAEQALAEAFAGQAIALgFANQgFANgNADQgHABgSgEIgNgEQgmgKgtgGQgfgDgOAEQgRAFgdAWIgNALIgIAKIgGAMQgEAIgEAEQgGAGgKAAIgBAAQgJAAgGgFgAEVhnIgLgCQgMgJgTgIIgBAAIgpgOQgHgCgEgEQgEgDgEgIIgHgLIgBgCIADgFIABgBIAKgOIARgXQAegoA7geIAQgIIAYgLIAZgLIBYgkQAzgVgzAjQgyAjACADIABABIASAKQAGAFADAHQACAIgCAHQgCAHgLALQgiAfglgBQgRAAgLgJQACAKgEAMQgHAQgSAMQARALAGAMQAFAIgBAIQAAAJgFAGQgIAKgNAAIgEgBgABZitQgNgGgBgOQgBgKAIgOQANgYAUgZQAYgfAjgiIAQgOQARgQALgIIACgBQheAdhrApQhZAjihBEQgYAKgNAAQgMABgWgGQhLgThRgfQgbgKgFgPQgCgIAEgJIAAgBQAEgHAHgEQAOgGAaALQA+AbBGARQAVAFALgBQAJgBANgEQAzgRBRgiQBmgrAcgLQAvgSBMgZICBgrQATgGAKAAQASABAGAOIABAFIAugSQBVgfAeAKQAeAJgkAZQgMAJAJAGQgVgBgfAJQg0ARgKAFQgqAPgJAGIgCACIgHADIgaASIgdAUQgUAQgZAaIgjAmQgMAPgJAOIgJAOIgHANQgEAHgFADQgIAFgHAAQgFAAgFgDg'
      )
    this.shape_3.setTransform(904.0891, 467.4669)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#E89FED')
      .s()
      .p(
        'AiAGmQgOgBgNgFIgCgBQgNgHgJgNQgFgIgEgJIgFABQgSAAgOgFQgdgKgKgeQgDgNABgMQg8AIgrAJIgeAEQgRACgNgDQgTgFgOgQQgOgQgBgUQgBgYAUgkQASghAWgWQAKgLAOgKIgWgEQgmgGgRgOQgMgKgGgRQgFgRADgRQACgNAGgLQgEgIgCgJIAAAAQgOgKgHgOQgHgPACgRQABgRAKgNQANgTAqgUIAFgDQgggLgggNQgWgJgHgLIgEgKIgDgKIgFgMQgDgHABgFQAAgHAHgGQAFgFAIgCQAIgCAVABQAGgQgVgdQgWgdAsAIIAPACIAAACQgEAJACAIQAFAOAbALQBRAfBLATQAWAGAMgBQANgBAYgKQChhDBZgjQBsgpBdgeIgCACQgLAIgRAPIgQAPQgjAhgYAfQgUAagNAYQgIAOABAKQABAOANAGQAMAFANgHQAFgEAEgHIAHgNIAJgOQAJgOAMgOIAjgmQAZgbAUgPIAdgVIAagSIAHgCIACgCQAJgGArgPQAJgGA1gQQAegKAWABQAHAEASADQgdAGAzADQA0ADgxAHQgwAGAFAKIABACIggALQhGAaAogKQAogKg8AZQglAPghAQIgXALIgRAJQg7AegeAoIgRAWIgKAOIgBACIgDAFIABABIAHAMQAEAIAEADQAEAEAHABIApAOIABABQATAHAMAKIAFADIANAOIgYAKIADAHQAHARAFAHQAFAIANALIASASQANARAAAYQgBAYgOARQAPAHAKANQALANADAQQADAQgFAQIgBADQAPADAKAHQANAIAIANQAIAOAAAPQABAQgHAOQgHAOgMAJQgNAJgSAEQgKACgSACIgGAAIg7AGQgCAIgIAJQAVAJAMARQAHAKABAIQABANgIAIQgJAJgMgBQgGgBgOgJIgTgLIgGABQgEAAgJgCIgKgEIgCAAQgPgGgkgFIgVgEQhMgOgpAUQgMAGgRANQgiAYgNAUQgOAKgMAEQgKADgJAAIgJAAg'
      )
    this.shape_4.setTransform(903.2544, 468.0384)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AhhAqQgGgLADgPQACgMAIgMIAEgHIAMgLQAegWARgFQAPgEAdADQAuAGAlAKQAEALgHALQgIAMgPgBIgQgEQgGgCgOgBIgbgBQgYAAgLAHQgHADgIAIQgGAHgBAFIgEANQgCAJgCAEQgHANgOAAQgOAAgIgOg'
      )
    this.shape_5.setTransform(914.511, 517.9107)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#E89FED')
      .s()
      .p(
        'AhOGLQgPAAgMgGIAAgqIgCgCQgFgHgDgHIgFAAQgSAAgOgEQgdgKgKgbQgEgMABgKQg7AHgsAIIgeAEQgRABgNgDQgTgEgNgPQgOgOgBgSQgCgWAUggQASgeAWgVQALgKANgJIgWgDQgmgFgQgNQgNgKgFgPQgFgPADgPQACgMAGgLQgEgGgCgHIgBgBQgNgJgHgNQgHgOABgPQACgQAJgMQAOgRAqgSIAFgCQghgLgggMQgWgIgGgKIgEgJIgDgJIgFgLQgDgGAAgFQABgGAGgGQAGgEAHgCQAIgCAWABQAGgOALgLQAJAIAUAEIBFAMQAnAHAbALIAUAIQAMAEAJABQANACAXgFQA8gNBXgwIBFgnIACAAIAFgBQAogOAhgOIBIggQApgSAggJIANgDIADgBQAWgMAMACQAIACAGAGIhKBWQgMAPgCAIIgGAJQgEANgIAOQgIANgFAPQgFAoASgEQAFADAGABQAJACAHgDIAGgEIAJAFIAWAMQASAOAHAWIACALQAHAEAFAGQAFAHAHAPQAHAPAGAHQAFAHAMAKQANALAFAFQAOARgBAUQAAAWgPAQQAPAGALAMQAKAMADAOQAEAPgGAPIgBACQAPADAKAGQANAHAIAMQAIANABAOQABAOgHAMQgHAOgNAIQgMAHgTAEIgiAEIgRABIAAALIgGAAIg6AGQgDAIgIAJQAVAJAMARQAIAKABAIQABANgIAIQgJAJgMgBQgHgBgOgJIgSgKIgHAAQgEABgIgDIgLgDIgCgBQgOgGglgFIgUgEQgwgJgiAFQgVADgPAHQgNAGgRANQgSAMgLAMQgLALgGAKQgOAKgMADQgKADgJAAIgIAAg'
      )
    this.shape_6.setTransform(903.0277, 476.891)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#120540')
      .s()
      .p(
        'AAUG5QgLgJABgPQAAgLAIgNIACgDQAHgJAKgLQANgMARgNQARgMANgGQAQgIAUgCQAigFAwAIIAUAFIAxAKIAEABIALAEQALAEAEAGQAJALgFANQgFANgOADQgHABgRgEIgOgEQglgKgugGQgegDgPAEQgRAFgeAWIgMALIgJAKIgGAMQgDAIgEAEQgHAGgJAAIgCAAQgIAAgGgFgAihixQgJgBgMgEIgUgIQgbgLgngIIhFgMQgUgDgIgIIgCgCQgHgIACgMQACgMAKgFQALgGAWAEQBeARAoAOQAYAIALACQAeAEAwgVQAjgPBLgrQBHgnApgRIBKgcQAygUAsgWQAQgJAMgDQATgDAJALQAGAFABAJQAAAIgEAHQgDAFgQAJQhCAhgfAMQg7AVgdAMQgVAIg1AcIhGAmQhWAwg8AOQgRADgMAAIgHAAg'
      )
    this.shape_7.setTransform(898.4056, 475.7188)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#E89FED')
      .s()
      .p(
        'Ag3F+QgQAAgNgGQgOgHgJgLQgFgHgDgIIgFAAQgSABgOgFQgdgJgKgcQgEgLABgKQg7AGgsAIIgeAEQgRACgNgDQgTgFgNgOQgOgPgBgSQgCgWAUggQASgeAWgUQALgKANgJIgWgDQgmgGgQgNQgNgJgFgQQgFgPADgPQACgMAGgKQgEgHgCgIIgBAAQgNgJgHgNQgHgNABgQQACgPAJgMQAOgSAqgSIAFgCQghgKgggMQgWgJgGgJIgEgJIgDgJIgFgLQgDgGAAgFQABgHAGgFQAGgFAHgCQAIgBAWABQAGgPAMgLQANgMAQgFQAOgGAMADQAQADAEAMIACAHQACADAIADIA+ASQAiAIAcADIALABQATgFAYgJIAzgWQAWgIAmgMIAUgGIAVgKQAcgLANgCIAFgBQAogPAhgOIBIggQApgRAggKIANgDIADgBQAWgLAMACQAIACAGAGIhKBVQgMAQgCAIIgGAIQgEAOgIAOQgIANgFAOQgFApASgFQAFAEAGABQAJABAHgDIAGgEIAJAFIAWANQASANAHAXIACAKQAHAFAFAGQAFAGAHAQQAHAPAGAHQAFAHAMAKQANAKAFAGQAOAPgBAWQAAAWgPAQQAPAGALAMQAKAMADAOQAEAOgGAPIgBADQAPACAKAGQANAIAIAMQAIANABANQABAOgHANQgHANgNAIQgMAIgTAEIgiAEQgyADg4AIQgOAVgbAGQgIACgMAAIgBAAIghACIggADIglAKIgbAGIgMAEQgiAOgMAHIgeAWQgRANgPAEQgKADgKAAIgHgBg'
      )
    this.shape_8.setTransform(906.4277, 481.5806)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#E89FED')
      .s()
      .p(
        'AhrFqQgFgHgDgHIgFAAQgSAAgOgEQgdgKgKgbQgEgMABgKQg7AHgsAIIgeAEQgRABgNgDQgTgEgNgPQgOgOgBgSQgCgWAUggQASgeAWgVQALgKANgJIgWgDQgmgFgQgNQgNgKgFgPQgFgPADgPQACgMAGgLQgEgGgCgIIgBgBQgNgJgHgMQgHgOABgPQACgQAJgMQAOgRAqgSIAFgCQghgLgggMQgWgIgGgKIgEgJIgDgJIgFgLQgDgGAAgFQABgGAGgGQAGgEAHgCQAIgCAWABQAGgOAMgMQANgLAQgGQAOgFAMADQAQADAEAMIACAGQACAEAIACIA+ASQAiAJAcACIALACQATgFAYgKIAzgVQAWgJAmgLIAUgHIAVgJQAcgMANgCIAFgBQAogOAhgOIBIggQApgSAggJIANgDIADgBQAWgMAMACQAIACAGAHIhKBVQgMAPgCAIIgGAJQgEANgIAOQgIAOgFAOQgFAoASgEQAFADAGABQAJACAHgDIAGgEIAJAFIAWAMQASAOAHAWIACALQAHAEAFAGQAFAHAHAPQAHAPAGAHQAFAHAMAKQANALAFAFQAOAQgBAVQAAAWgPAQQAPAGALAMQAKAMADAOQAEAPgGAPIgBACQAPADAKAGQANAHAIAMQAIANABAOQABAOgHAMQgHAOgNAIQgMAHgTAEIgiAEQgyAEg4AIQgJAOgPAHQg/gKhngMIi2BsQgKgGgIgKg'
      )
    this.shape_9.setTransform(909.9277, 486.7102)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#E89FED')
      .s()
      .p(
        'AhrFqQgFgHgDgHIgFAAQgSAAgOgEQgdgKgKgbQgEgMABgKQg7AHgsAIIgeAEQgRABgNgDQgTgEgNgPQgOgOgBgSQgCgWAUggQASgeAWgVQALgKANgJIgWgDQgmgFgQgNQgNgKgFgPQgFgPADgPQACgMAGgLQgEgGgCgIIgBgBQgNgJgHgMQgHgOABgPQACgQAJgMQAOgRAqgSIAFgCQghgLgggMQgWgIgGgKIgEgJIgDgJIgFgLQgDgGAAgFQABgGAGgGQAGgEAHgCQAIgCAWABQAGgOAMgMQANgLAQgGIABAAIgggRQBRAoAIACIA+ASQAiAJAcACIALACQATgFAYgKIAzgVQAWgJAmgLIAUgHIAVgJQAcgMANgCIAFgBQAogOAhgOIBIggQApgSAggJIANgDIADgBQAWgMAMACQAIACAGAHIhKBVQgMAPgCAIIgGAJQgEANgIAOQgIAOgFAOQgFAoASgEQAFADAGABQAJACAHgDIAGgEIAJAFIAWAMQASAOAHAWIACALQAHAEAFAGQAFAHAHAPQAHAPAGAHQAFAHAMAKQANALAFAFQAOAQgBAVQAAAWgPAQQAPAGALAMQAKAMADAOQAEAPgGAPIgBACQAPADAKAGQANAHAIAMQAIANABAOQABAOgHAMQgHAOgNAIQgMAHgTAEIgiAEQgyAEg4AIQgJANgPAIQg/gKhngMIi2BsQgKgGgIgKg'
      )
    this.shape_10.setTransform(913.0777, 490.6602)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] }, 38)
        .to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }] }, 1)
        .to({ state: [{ t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }] }, 1)
        .to({ state: [{ t: this.shape_8 }] }, 1)
        .to({ state: [{ t: this.shape_9 }] }, 1)
        .to({ state: [{ t: this.shape_10 }] }, 1)
        .to({ state: [] }, 1)
        .wait(34)
    )

    // Layer_27
    this.instance = new lib.Symbol2('synched', 1)
    this.instance.setTransform(863.85, 722.1, 0.6214, 0.6214, 0, 0, 180, 598.1, 976.5)
    this.instance._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(38)
        .to({ _off: false }, 0)
        .to(
          {
            x: 879.45,
            startPosition: 10,
          },
          9
        )
        .to({ regY: 976.6, x: 871.45, y: 761.1, startPosition: 15 }, 5)
        .to(
          {
            x: 890.95,
            y: 788.4,
            startPosition: 19,
          },
          4
        )
        .to({ _off: true }, 11)
        .wait(11)
    )

    // Layer_27
    this.instance_1 = new lib.Symbol2('single', 44)
    this.instance_1.setTransform(715.2, 463.6, 0.6214, 0.6214, 0, 0, 180, 881.2, 453.8)
    this.instance_1._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(67)
        .to({ _off: false }, 0)
        .to(
          {
            skewX: -5.9662,
            skewY: 174.0338,
            x: 713.05,
            y: 475.1,
          },
          10
        )
        .wait(1)
    )

    // Layer_14
    this.instance_2 = new lib.Symbol3('synched', 0)
    this.instance_2.setTransform(397.7, 278.1, 1, 1, 0, 0, 0, 396.9, 278.1)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .to(
          {
            rotation: -3.212,
            x: 395.6,
            startPosition: 4,
          },
          3,
          cjs.Ease.get(1)
        )
        .to({ rotation: 0, x: 397.7, startPosition: 8 }, 5, cjs.Ease.get(1))
        .wait(1)
        .to(
          {
            regX: 544.5,
            regY: 436.7,
            x: 545.3,
            y: 436.7,
            startPosition: 9,
          },
          0
        )
        .wait(1)
        .to({ startPosition: 10 }, 0)
        .wait(1)
        .to({ startPosition: 11 }, 0)
        .wait(1)
        .to(
          {
            regX: 396.9,
            regY: 278.1,
            x: 397.7,
            y: 278.1,
            startPosition: 0,
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 544.5,
            regY: 436.7,
            rotation: -1.6907,
            x: 548.5,
            y: 432.25,
            startPosition: 1,
          },
          0
        )
        .wait(1)
        .to({ rotation: -2.9348, x: 550.75, y: 428.95, startPosition: 2 }, 0)
        .wait(1)
        .to(
          {
            regX: 396.9,
            regY: 278.2,
            rotation: -3.7323,
            x: 394.5,
            y: 278.15,
            startPosition: 3,
          },
          0
        )
        .to(
          {
            regY: 278.1,
            rotation: 0,
            x: 397.7,
            y: 278.1,
            startPosition: 9,
          },
          6,
          cjs.Ease.get(1)
        )
        .to({ startPosition: 15 }, 16)
        .to(
          {
            x: 398.9,
            y: 263.45,
            startPosition: 23,
          },
          9,
          cjs.Ease.get(1)
        )
        .to({ startPosition: 23 }, 21)
        .to({ x: 397.7, y: 278.1, startPosition: 0 }, 10)
        .wait(1)
    )

    // Layer_1
    this.instance_3 = new lib.Tween3('synched', 0)
    this.instance_3.setTransform(540.85, 671.15, 1, 1, 0, 0, 0, 52.2, 170.3)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .to({ startPosition: 0 }, 37)
        .to(
          {
            scaleY: 1.0469,
            y: 671.2,
          },
          9,
          cjs.Ease.get(1)
        )
        .to({ startPosition: 0 }, 21)
        .to({ scaleY: 1, y: 671.15 }, 10, cjs.Ease.get(1))
        .wait(1)
    )

    // Layer_28
    this.instance_4 = new lib.Layer28()
    this.instance_4.setTransform(497.15, 304.75, 0.6773, 0.6773, 3.7488, 0, 0, 133.9, 413.2)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(37)
        .to(
          {
            regX: 133.8,
            rotation: -12.2041,
            x: 488.6,
            y: 294.25,
          },
          9,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 134,
            regY: 413.4,
            rotation: -5.732,
            x: 488.75,
            y: 294.3,
          },
          9,
          cjs.Ease.quadInOut
        )
        .wait(1)
        .to({ regX: 276.5, regY: 338.3, x: 579.7, y: 234.05 }, 0)
        .wait(11)
        .to(
          {
            regX: 134,
            regY: 413.4,
            x: 488.75,
            y: 294.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 276.5,
            regY: 338.3,
            rotation: -4.7373,
            x: 581.6,
            y: 236.75,
          },
          0
        )
        .wait(1)
        .to({ rotation: -3.7529, x: 583.45, y: 239.4 }, 0)
        .wait(1)
        .to(
          {
            rotation: -2.7789,
            x: 585.3,
            y: 242,
          },
          0
        )
        .wait(1)
        .to({ rotation: -1.8152, x: 587, y: 244.65 }, 0)
        .wait(1)
        .to(
          {
            rotation: -0.862,
            x: 588.8,
            y: 247.35,
          },
          0
        )
        .wait(1)
        .to({ rotation: 0.0809, x: 590.45, y: 249.9 }, 0)
        .wait(1)
        .to(
          {
            rotation: 1.0135,
            x: 592.1,
            y: 252.55,
          },
          0
        )
        .wait(1)
        .to({ rotation: 1.9356, x: 593.65, y: 255.1 }, 0)
        .wait(1)
        .to(
          {
            rotation: 2.8474,
            x: 595.25,
            y: 257.7,
          },
          0
        )
        .wait(1)
        .to({ regX: 133.9, regY: 413.2, rotation: 3.7488, x: 497.15, y: 304.75 }, 0)
        .wait(1)
    )

    // Layer_29
    this.instance_5 = new lib.Layer29()
    this.instance_5.setTransform(929.35, 682.3, 0.6773, 0.6773, 0, 0, 0, 224.1, 342.7)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .to(
          {
            regY: 342.8,
            scaleX: 0.7432,
            scaleY: 0.5771,
            x: 929.3,
            y: 682.35,
          },
          37,
          cjs.Ease.get(1)
        )
        .to(
          {
            regY: 342.9,
            scaleX: 0.6481,
            scaleY: 0.7803,
            skewX: -4.9121,
            y: 682.4,
          },
          2
        )
        .to(
          {
            regY: 342.7,
            scaleX: 0.6773,
            scaleY: 0.6773,
            skewX: 0,
            x: 929.35,
            y: 682.3,
          },
          7,
          cjs.Ease.get(1)
        )
        .wait(32)
    )

    // Layer_26
    this.instance_6 = new lib.Layer26()
    this.instance_6.setTransform(658.8, 409.25, 0.6773, 0.6773, 0, 0, 0, 179.6, 80.5)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .to(
          {
            regX: 179.7,
            regY: 80.6,
            scaleX: 0.6824,
            skewX: -7.713,
            skewY: -14.7351,
            x: 655.5,
            y: 402.5,
          },
          3
        )
        .to(
          {
            regX: 179.6,
            regY: 80.5,
            scaleX: 0.6773,
            skewX: 0,
            skewY: 0,
            x: 658.8,
            y: 409.25,
          },
          5,
          cjs.Ease.quadInOut
        )
        .wait(4)
        .to(
          {
            regX: 179.7,
            regY: 80.6,
            scaleX: 0.6824,
            skewX: -7.713,
            skewY: -14.7351,
            x: 655.5,
            y: 402.5,
          },
          3
        )
        .to(
          {
            regX: 179.6,
            regY: 80.5,
            scaleX: 0.6773,
            skewX: 0,
            skewY: 0,
            x: 658.8,
            y: 409.25,
          },
          6,
          cjs.Ease.quadInOut
        )
        .wait(16)
        .to({ y: 399.35 }, 9, cjs.Ease.quadInOut)
        .wait(21)
        .to(
          {
            x: 657.85,
            y: 409.25,
          },
          10
        )
        .wait(1)
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(266.2, 19.4, 828.7, 670.5)

  // stage content:
  ;(lib.stake2earn = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Layer_1
    this.instance = new lib.whole('synched', 0)
    this.instance.setTransform(235.85, 203.9, 0.3515, 0.3515, 0, 0, 0, 758.8, 612.2)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(78))

    this._renderFirstFrame()
  }).prototype = p = new lib.AnMovieClip()
  p.nominalBounds = new cjs.Rectangle(262.6, 135.4, 91.39999999999998, 95.79999999999998)
  // library properties:
  lib.properties = {
    id: 'E713AECC0DB97547A1728DCAF361C7FE',
    width: 400,
    height: 250,
    fps: 30,
    color: '',
    opacity: 1.0,
    manifest: [],
    preloads: [],
  }

  // bootstrap callback support:
  ;(lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas)
  }).prototype = p = new createjs.Stage()

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay
  }
  p.play = function () {
    this.tickEnabled = true
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
  }
  p.stop = function (ms) {
    if (ms) this.seek(ms)
    this.tickEnabled = false
  }
  p.seek = function (ms) {
    this.tickEnabled = true
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000)
  }
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000
  }

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000
  }

  an.bootcompsLoaded = an.bootcompsLoaded || []
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = []
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback)
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i])
      }
    }
  }

  an.compositions = an.compositions || {}
  an.compositions['E713AECC0DB97547A1728DCAF361C7FE'] = {
    getStage: function () {
      return exportRoot.stage
    },
    getLibrary: function () {
      return lib
    },
    getSpriteSheet: function () {
      return ss
    },
    getImages: function () {
      return img
    },
  }

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id)
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id)
    }
  }

  an.getComposition = function (id) {
    return an.compositions[id]
  }

  an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
    var lastW,
      lastH,
      lastS = 1
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height
      var iw = window.innerWidth,
        ih = window.innerHeight
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1
      if (isResp) {
        if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
          sRatio = lastS
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio)
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio)
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio)
        }
      }
      domContainers[0].width = w * pRatio * sRatio
      domContainers[0].height = h * pRatio * sRatio
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + 'px'
        container.style.height = h * sRatio + 'px'
      })
      stage.scaleX = pRatio * sRatio
      stage.scaleY = pRatio * sRatio
      lastW = iw
      lastH = ih
      lastS = sRatio
      stage.tickOnUpdate = false
      stage.update()
      stage.tickOnUpdate = true
    }
  }
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0)
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds()
      }
    }
  }
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index]
            if (cacheInst.startFrame <= target.currentFrame && target.currentFrame <= cacheInst.endFrame) {
              cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h)
            }
          }
        }
      }
    }
  }
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}))
var createjs, AdobeAn
