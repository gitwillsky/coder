package tzcxsj

import (
	"github.com/stretchr/testify/require"
	"grokkingalgorithms/tools"
	"testing"
)

/**
n 只蚂蚁以每秒 1cm 的速度在长为 Lcm 的竿子上爬行。当蚂蚁爬到竿子的端点时就会掉落。
由于竿子太细，两只蚂蚁相遇时，它们不能交错通过，只能各自反向爬回去。对于每只蚂蚁，
我们知道它距离竿子左端的距离 xi，但不知道它当前的朝向。请计算所有蚂蚁落下竿子所需
的最短时间和最长时间。

限制条件
 1 ≤ L ≤ 106
 1 ≤ n ≤ 106
 0 ≤ xi ≤ L
*/

func TestAlg162(t *testing.T) {
	const L = 10
	const n = 3
	var x = []int{2, 6, 7}

	min := 0
	max := 0

	for v := range x {
		min = tools.MaxInt(min, tools.MinInt(v, L - v))
		max = tools.MaxInt(max, tools.MaxInt(v, L - v))
	}

	require.Equal(t, 4, min)
	require.Equal(t, 8, max)
}
