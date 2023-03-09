(() => {

    const fullName = ( firstName: string, lastName?: string, upper: boolean =  false ): string => {
       
       if ( upper ) {
       
           return `${ firstName } ${ lastName || '----'}`.toLocaleLowerCase();
        
        }else{

        return `${ firstName } ${ lastName || '----'}`;
        
    }
}
    const name = fullName( 'Tony', 'Stark', true );

    console.log({ name });

})()