package grokkingalgorithms

import (
	"github.com/stretchr/testify/require"
	"testing"
)

func binarySearch(a []int, b int) int {
	left := 0
	right := len(a) - 1
	for left <= right {
		mid := (left + right) / 2
		if a[mid] == b {
			return mid
		}
		if a[mid] < b {
			left = mid + 1
		}
		if a[mid] > b {
			right = mid - 1
		}
	}
	return -1
}

func Test_BinarySearch(t *testing.T) {
	inputArray := []int{1, 3, 4, 5, 7, 9, 10}
	require.Equal(t, 0, binarySearch(inputArray, 1))
	require.Equal(t, 6, binarySearch(inputArray, 10))
	require.Equal(t, 3, binarySearch(inputArray, 5))
}
