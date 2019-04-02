
// A(k)[i,j] = Min{ A(k-1)[i,k] + A(k-1)[k,j], A(k)[i,j] }

function allPairsShortestPath(matrix, vertexSize) {
    let A = {
        0: matrix
    }
    for (k = 1; k < vertexSize; k++) {
        for (i = 0; i < vertexSize; i++) {
            for (j = 0; j < vertexSize; j++) {
                if (!A[k]) {
                    A[k] = []
                }
                if (!A[k][i]) {
                    A[k][i] = []
                }

                A[k - 1][i][j] = (A[k - 1][i][j] > (A[k][i][k] + A[k][k][j])) ? A[k + 1][i][j] : A[k][i][k] + A[k][k][j]
                //console.log(A[0][i][j]);
            }
        }
    }
    console.log(A);
}

const matrix = [[0, 1, 43], [1, 0, 6], [Infinity, Infinity, 0]]
allPairsShortestPath(matrix, 3)
