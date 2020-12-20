package tzcxsj

import (
	"math/rand"
	"sort"
	"testing"
)

/**
有 n 根棍子，棍子 i 的长度为 ai。想要从中选出 3 根棍子组成周长尽可能长的三角形。请输
出最大的周长，若无法组成三角形则输出 0
*/

func TestAlg(t *testing.T) {
	input := rand.Perm(100)
	sort.Ints(input)

	i := len(input) - 1
	for ; i >= 2; i-- {
		if input[i-1]+input[i-2] > input[i] {
			t.Logf("%d %d %d\n", input[i-2], input[i-1], input[i])
		}
	}
}
