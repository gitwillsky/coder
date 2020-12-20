package tools

func checkSort(a []int) bool {
	if a == nil || len(a) == 0 {
		return true
	}

	for i := 0; i < len(a)-1; i++ {
		if a[i]-a[i+1] > 0 {
			return false
		}
	}
	return true
}
