<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';

  import Modal from './Modal.svelte';

  let videoRef;
  let mediaStream;
  let error;

  const dispatch = createEventDispatcher()

  onMount(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      mediaStream = stream;
      videoRef.srcObject = stream;
      videoRef.play();
    });
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

  function onSearch() {
    dispatch('search', {
      value: 'Кружка'
    })
  }
</script>

<style>
button {
  width: 100%;
  height: 50px;
  margin: 0;
}
</style>

<Modal {error} on:click>
  <video bind:this={videoRef} width="600" height="450"></video>
  <button on:click={onSearch}>Search</button>
</Modal>