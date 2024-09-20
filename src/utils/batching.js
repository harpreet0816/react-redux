export const batchingProcess = () => {
    const createPromise = (time) => {
        return new Promise((res) => {
          setTimeout(() => {
            res(time);
          }, 2000);
        });
      };
      
      const promises = [
        createPromise(100).then((res)=>res),
        createPromise(200).then((res)=>res),
        createPromise(300).then((res)=>res),
        createPromise(400).then((res)=>res),
        createPromise(500).then((res)=>res),
        createPromise(600).then((res)=>res),
      ];
      
      const batchSize = 2; 
      
      const runBatches = async () => {
        for (let i = 0; i < promises.length; i += batchSize) {
          const batch = promises.slice(i, i + batchSize);
          const res = await Promise.all(batch); // Await for the current batch to finish before moving to the next one
          console.log("done", res)
        }
      };
      
      runBatches(); 
}