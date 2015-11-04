function getMissingElement(superImportantArray){
    superImportantArray.sort()

    for (var i=0; i <= superImportantArray.length; i++) {
        if (i !=superImportantArray[i])
            return i
    }

}