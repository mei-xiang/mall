<template>
  <div class="cart">
    <cart-navbar class="navbar"></cart-navbar>
    <scroll class="scroll" ref="scroll">
      <cart-list></cart-list>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        <li>32</li>
        <li>33</li>
        <li>34</li>
        <li>35</li>
        <li>36</li>
        <li>37</li>
        <li>38</li>
        <li>39</li>
        <li>40</li>
        <li>41</li>
        <li>42</li>
        <li>43</li>
        <li>44</li>
        <li>45</li>
        <li>46</li>
        <li>47</li>
        <li>48</li>
        <li>49</li>
        <li>50</li>
        <li>51</li>
        <li>52</li>
        <li>53</li>
        <li>54</li>
        <li>55</li>
        <li>56</li>
        <li>57</li>
        <li>58</li>
        <li>59</li>
        <li>60</li>
        <li>61</li>
        <li>62</li>
        <li>63</li>
        <li>64</li>
        <li>65</li>
        <li>66</li>
        <li>67</li>
        <li>68</li>
        <li>69</li>
        <li>70</li>
        <li>71</li>
        <li>72</li>
        <li>73</li>
        <li>74</li>
        <li>75</li>
        <li>76</li>
        <li>77</li>
        <li>78</li>
        <li>79</li>
        <li>80</li>
        <li>81</li>
        <li>82</li>
        <li>83</li>
        <li>84</li>
        <li>85</li>
        <li>86</li>
        <li>87</li>
        <li>88</li>
        <li>89</li>
        <li>90</li>
        <li>91</li>
        <li>92</li>
        <li>93</li>
        <li>94</li>
        <li>95</li>
        <li>96</li>
        <li>97</li>
        <li>98</li>
        <li>99</li>
        <li>100</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/Scroll'
import CartNavbar from './CartChildComps/CartNavbar'
import CartList from './CartChildComps/CartList'

// 从vuex中导入mapGetters
import { mapGetters } from 'vuex'

export default {
  activated() {
    this.$nextTick(() => {
      this.$refs.scroll.scroll.refresh()
    })
  },
  mounted() {
    // 进行了缓存 keep-alive。生命周期函数都只会执行一次。需要在activated中重新计算refresh
  },
  computed: {
    // 将store中的getters映射到组件中的计算属性中
    ...mapGetters(['getCartList'])
  },
  components: {
    CartNavbar,
    CartList,
    Scroll
  }
}
</script>

<style lang="less" scoped>
.cart {
  width: 100%;
  height: 100%;
  padding-top: 44px;
  padding-bottom: 55px;
  background-color: #f2f2f2;
}
.scroll {
  width: 100%;
  height: 100%;
  // overflow: hidden;
  // 文字在过长进行换行，避免出现滚动条
  word-wrap: break-word;
}
.navbar {
  width: 100vw;
}
</style>