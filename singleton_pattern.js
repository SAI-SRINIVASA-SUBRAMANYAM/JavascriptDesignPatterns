function Process(state)
{
  this.state = state;
}

const Singleton = (function(){
  function ProcessManager()
  {
    this.numProcess = 0;
  }
  let pManager;
  function createProcessManager()
  {
    pManager = new ProcessManager();
    return pManager;
  }
  return {
    getProcessManager: () => {
      if (!pManager) pManager = createProcessManager()
      return pManager
    }
  }
})()


const pOne = Singleton.getProcessManager();
const pTwo = Singleton.getProcessManager();
console.log(pOne === pTwo);
