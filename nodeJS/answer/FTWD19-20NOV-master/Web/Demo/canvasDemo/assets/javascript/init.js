currentFunction = new DrawingRectangle(contextReal,contextDraft);

$('#drawingLine').on('click', function(){
    currentFunction = new DrawingLine(contextReal,contextDraft)
})

$('#drawingRect').on('click', function(){
    currentFunction = new DrawingRectangle(contextReal,contextDraft)
})