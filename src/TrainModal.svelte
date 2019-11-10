<script>
  import { onMount, onDestroy } from 'svelte';
  import Modal from './Modal.svelte';
  import { classifier } from './sketch.js';

  function addMug() {
    classifier.addImage(videoRef, 'кружка', imageAdded('Кружка'))
  }

  function addPen() {
    classifier.addImage(videoRef, 'ручка', imageAdded('Ручка'))
  }

  function imageAdded (name) {
    console.log('Image added: ', name);
  }

  function train() {
    let lastLoss;
    classifier.train(lossValue => {
      if (lossValue) {
        lastLoss = lossValue
        console.log('Loss: ', lastLoss);
      } else {
        console.log('Done Training! Final Loss: ', lastLoss);
      }
    })
  }

  let videoRef;
  let mediaStream;

  onMount(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      mediaStream = stream;
      videoRef.srcObject = stream;
      videoRef.play();
    })
  });

  onDestroy(() => {
    stopStream(mediaStream);
    videoRef.pause();
    videoRef.src="";
  });


  function stopStream (stream) {
    for (let track of stream.getVideoTracks()) {
      track.stop();
    }
  }

</script>

<style>
.controls {
  display: flex;
  align-items: stretch;
}

button {
  height: 50px;
  /* border: 0; */
  margin: 0;
  width: 100%;
}
</style>

<Modal on:click>
  <video bind:this={videoRef} width="600" height="450"></video>
  <div class="controls">
    <button on:click={addMug}>Mug</button>
    <button on:click={addPen}>Pen</button>
  </div>
  <div class="controls">
    <button on:click={train}>Train</button>
  </div>
</Modal>