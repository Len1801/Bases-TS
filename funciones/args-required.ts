(() => {

    const fullName = ( firstname: string, lastName: string ) => {
        
        return `${ firstname } ${ lastName }`;
    }

    let noName: any;
    
    const name = fullName( 'Tony', 'Stark' );

    console.log({ name });

})()