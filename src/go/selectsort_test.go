package grokkingalgorithms

import (
	"math/rand"
	"testing"

	"github.com/stretchr/testify/require"
)

func selectSort(a []int) {
	if a == nil || len(a) == 0 {
		return
	}

	for i := 0; i < len(a); i++ {
		for j := i + 1; j < len(a); j++ {
			if a[i] > a[j] {
				a[i], a[j] = a[j], a[i]
			}
		}
	}
}

func Test_SelectSort(t *testing.T) {
	arr := rand.Perm(100)
	selectSort(arr)
	require.True(t, checkSort(arr))
}
