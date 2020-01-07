/**
 * Data
 */
var personDetail = {
    name: 'Sam',
    programmingLevel: 'Master'
  }
  
  var classes = [
    {
      name: 'FTSE',
      instructor: 'Sam'
    },
    {
      name: 'FTDS',
      instructor: 'Jyoti'
    }
  ]
  
  var venues = [
    {
      name: 'RM1',
      className: 'FTSE'
    },
    {
      name: 'RM2',
      className: 'FTDS'
    }
  ]
  
  /**
   * Function definitions
   */
  function getPersonName(callback) {
    console.log('Getting person detail...')
    // a fake time-consuming function
    setTimeout(() => {
      let response = personDetail
      console.log('Person detail received!')
      console.log(response)
      return callback(response.name)
    }, 2000)
  }
  
  function getClassName(personName, callback) {
    console.log('Getting class name...')
    // another fake time-consuming function
    setTimeout(() => {
      let response;
      for (key in classes) {
        if (classes[key].instructor === personName) {
          response = classes[key].name
        }
      }
      console.log('Class name found!')
      console.log(response)
      return callback(response)
    }, 2000)
  }
  
  function getVenue(className, callback) {
    console.log('Getting venue name...')
    // last fake time-consuming function, I promise
    setTimeout(() => {
      let response;
      for (key in venues) {
        if (venues[key].className === className) {
          response = venues[key].name
        }
      }
      console.log('Venue found!')
      console.log(response)
      return callback(response)
    }, 2000)
  }
  
  /**
   * Calls to APIs
   */
  // get person detail
  getPersonName((personName) => {
    // get class name with person's name
    getClassName(personName, (className) => {
      // finally Sam can know where he will teach
      getVenue(className, () => {
        console.log('Program ends here')
      })
    })
  })
  
  /**
   * Question: 
   * Sam as a Xccelerate instructor often needs to 
   * find where he will teach his next FTSE class. 
   * Andy wrote above functions to help him find the 
   * correct venue. Although it gets the job done, 
   * the readibility of the code is bad.
   * (Notice in `Calls to APIs` how each call to the function gets more indented and imagine what happens if there are 10 calls to getXXX functions?)
   * 
   * 1. Point out what problems the above code has (as comments on the top of the file)
   * 2. Can you help Andy turn above functions into promises?
   * 2. Can you further improve the code by using async/await?
   */
  
  
  /** 
   * 1> Solution:
   */
  // var getPersonName = () => {
  //   return new Promise((resolve, reject) => {
  //     console.log('Getting person detail...')
  //     setTimeout(() => {
  //       let response = personDetail
  //       if (response) {
  //         console.log('Person detail received!')
  //         console.log(response)
  //         resolve(response.name)
  //       } else {
  //         reject('Error')
  //       }
  //     }, 2000)
  //   })
  // }
  
  // var getClassName = (personName) => {
  //   return new Promise((resolve, reject) => {
  //     console.log('Getting class name...')
  //     setTimeout(() => {
  //       let response;
  //       for (key in classes) {
  //         if (classes[key].instructor === personName) {
  //           response = classes[key].name
  //         }
  //       }
  //       if (response) {
  //         console.log('Class name found!')
  //         console.log(response)
  //         resolve(response)
  //       } else {
  //         reject('Error')
  //       }
  //     }, 2000)
  //   })
  // }
  
  // var getVenue = (className) => {
  //   return new Promise((resolve, reject) => {
  //     console.log('Getting venue name...')
  //     setTimeout(() => {
  //       let response;
  //       for (key in venues) {
  //         if (venues[key].className === className) {
  //           response = venues[key].name
  //         }
  //       }
  //       if (response) {
  //         console.log('Venue name found!')
  //         console.log(response)
  //         resolve(response)
  //       } else {
  //         reject('Error')
  //       }
  //     }, 2000)
  //   })
  // }
  
  // getPersonName()
  //   .then(getClassName)
  //   .then(getVenue)
  //   .then(() => {
  //     console.log('Program ends here')
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  
  /**
   *  2> Solution:
   */
  // (async () => {
  //   try {
  //     let personName = await getPersonName()
  //     let className = await getClassName(personName)
  //     let venue = await getVenue(className)
  //     console.log('Program ends here')
  //   } catch (err) {
  //     console.log(err)
  //     throw err
  //   }
  // })()