var board = new Board();
let playerColor = Piece.White;
board.drawBoard();
board.initializePieces();
board.drawPieces();
addDragAndDropToPiece();
generatePrecomputedMoves();
let moves = getNewMoves();
showBoardInConsole();
changeBoardTheme(16);
if (AI_vs_AI){
    removeAllEventListeners();
    playComputer();
}