# Fizzbuzz in URM

## Syntax

```
An   # Rn += 1
Sn   # Rn -= 1
(F)n # while Rn != 0 : F
F;G  # Do F then G
P    # Print current state
# _  # Line comment
```

Example: Addition can be implemented as `(A0;S1)1`

## Implementation

Writes  
R1 = 1 if Fizz  
R1 = 2 if Buzz  
R1 = 3 if Fizzbuzz  
R0 = number else

```
# R9 = 100
A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;
A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;
A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;
A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;
A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;A9;

# Loop from 1 to 100
(A8;(A0;A7;S8)8;

# Fizzbuzz logic
(S0;A1;A5;A6)0;
A2;A2;A2;
( # while R1 > 3 : R1 =- 3
  (S1;S2;A3)1;
  A4;(S4;(S2)2)2;
  (
    S3;S3;S3;
    (A1;S3)3;
    A2;A2;A2;
    S4
  )4
)2;
# if R3 = 0 : R4 = 1
A4;(S4;(S3)3)3;
A2;A2;A2;A2;A2;
(A1;S5)5;
(S4;A5)4;
( # while R1 > 5 : R1 =- 5 done
  (S1;S2;A3)1;
  A4;(S4;(S2)2)2;
  (
    S3;S3;S3;S3;S3;
    (A1;S3)3;
    A2;A2;A2;A2;A2;
    S4
  )4
)2;
# if R3 = 0 : R4 = 1
A4;(S4;(S3)3)3;
# R4 = buzz (5)
# R5 = fizz (3)
# if fizz
(
  A3;
  # if also fizzbuzz
  (A1;A1;A1;S3;S4)4;
  # else (just fizz)
  (A1;S3)3;S5;
  # clear number
  (S6)6
)5;
# else if buzz
(
  A1;A1;S4;
  # clear number
  (S6)6
)4;
# else none
(A0;S6)6;
P;
# continue loop
(S0)0;(S7;A8)7;S9
)9
```

## Fizzbuzz output

R0 = Output if not Fizz/Buzz/Fizzbuzz  
R1 = Fizz (1) / Buzz (2) / Fizzbuzz (3) / none (0)  
R7 = Current number  

<table><tbody><tr><th>#Instructions</th><th>#Checks</th><th>R0</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th><th>R9</th></tr><tr><td>142</td><td>42</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>100</td></tr><tr><td>205</td><td>94</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>2</td><td>0</td><td>99</td></tr><tr><td>298</td><td>164</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>3</td><td>0</td><td>98</td></tr><tr><td>419</td><td>240</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>4</td><td>0</td><td>97</td></tr><tr><td>569</td><td>332</td><td>0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>5</td><td>0</td><td>96</td></tr><tr><td>781</td><td>447</td><td>6</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>6</td><td>0</td><td>95</td></tr><tr><td>1007</td><td>571</td><td>7</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>7</td><td>0</td><td>94</td></tr><tr><td>1268</td><td>709</td><td>8</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>8</td><td>0</td><td>93</td></tr><tr><td>1568</td><td>871</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>9</td><td>0</td><td>92</td></tr><tr><td>1925</td><td>1049</td><td>0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>10</td><td>0</td><td>91</td></tr><tr><td>2365</td><td>1259</td><td>11</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>11</td><td>0</td><td>90</td></tr><tr><td>2812</td><td>1485</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>12</td><td>0</td><td>89</td></tr><tr><td>3327</td><td>1724</td><td>13</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>13</td><td>0</td><td>88</td></tr><tr><td>3881</td><td>1986</td><td>14</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>14</td><td>0</td><td>87</td></tr><tr><td>4497</td><td>2282</td><td>0</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>15</td><td>0</td><td>86</td></tr><tr><td>5263</td><td>2626</td><td>16</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>16</td><td>0</td><td>85</td></tr><tr><td>6007</td><td>2968</td><td>17</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>17</td><td>0</td><td>84</td></tr><tr><td>6806</td><td>3344</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>18</td><td>0</td><td>83</td></tr><tr><td>7698</td><td>3737</td><td>19</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>19</td><td>0</td><td>82</td></tr><tr><td>8634</td><td>4167</td><td>0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>20</td><td>0</td><td>81</td></tr><tr><td>9722</td><td>4641</td><td>21</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>21</td><td>0</td><td>80</td></tr><tr><td>10829</td><td>5135</td><td>22</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>22</td><td>0</td><td>79</td></tr><tr><td>12011</td><td>5659</td><td>23</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>23</td><td>0</td><td>78</td></tr><tr><td>13257</td><td>6223</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>24</td><td>0</td><td>77</td></tr><tr><td>14610</td><td>6814</td><td>0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>25</td><td>0</td><td>76</td></tr><tr><td>16126</td><td>7463</td><td>26</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>26</td><td>0</td><td>75</td></tr><tr><td>17639</td><td>8139</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>27</td><td>0</td><td>74</td></tr><tr><td>19285</td><td>8839</td><td>28</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>28</td><td>0</td><td>73</td></tr><tr><td>21000</td><td>9583</td><td>29</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>29</td><td>0</td><td>72</td></tr><tr><td>22802</td><td>10377</td><td>0</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>30</td><td>0</td><td>71</td></tr><tr><td>24869</td><td>11250</td><td>31</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>31</td><td>0</td><td>70</td></tr><tr><td>26894</td><td>12122</td><td>32</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>32</td><td>0</td><td>69</td></tr><tr><td>28999</td><td>13044</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>33</td><td>0</td><td>68</td></tr><tr><td>31262</td><td>13994</td><td>34</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>34</td><td>0</td><td>67</td></tr><tr><td>33584</td><td>15002</td><td>0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>35</td><td>0</td><td>66</td></tr><tr><td>36148</td><td>16075</td><td>36</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>36</td><td>0</td><td>65</td></tr><tr><td>38736</td><td>17179</td><td>37</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>37</td><td>0</td><td>64</td></tr><tr><td>41439</td><td>18329</td><td>38</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>38</td><td>0</td><td>63</td></tr><tr><td>44231</td><td>19535</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>39</td><td>0</td><td>62</td></tr><tr><td>47180</td><td>20779</td><td>0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>40</td><td>0</td><td>61</td></tr><tr><td>50372</td><td>22107</td><td>41</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>41</td><td>0</td><td>60</td></tr><tr><td>53551</td><td>23473</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>42</td><td>0</td><td>59</td></tr><tr><td>56928</td><td>24874</td><td>43</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>43</td><td>0</td><td>58</td></tr><tr><td>60404</td><td>26340</td><td>44</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>44</td><td>0</td><td>57</td></tr><tr><td>63992</td><td>27872</td><td>0</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>45</td><td>0</td><td>56</td></tr><tr><td>67960</td><td>29514</td><td>46</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>46</td><td>0</td><td>55</td></tr><tr><td>71866</td><td>31156</td><td>47</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>47</td><td>0</td><td>54</td></tr><tr><td>75877</td><td>32864</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>48</td><td>0</td><td>53</td></tr><tr><td>80111</td><td>34611</td><td>49</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>49</td><td>0</td><td>52</td></tr><tr><td>84419</td><td>36437</td><td>0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>50</td><td>0</td><td>51</td></tr><tr><td>89059</td><td>38349</td><td>51</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>51</td><td>0</td><td>50</td></tr><tr><td>93728</td><td>40303</td><td>52</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>52</td><td>0</td><td>49</td></tr><tr><td>98552</td><td>42319</td><td>53</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>53</td><td>0</td><td>48</td></tr><tr><td>103490</td><td>44407</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>54</td><td>0</td><td>47</td></tr><tr><td>108635</td><td>46544</td><td>0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>55</td><td>0</td><td>46</td></tr><tr><td>114103</td><td>48791</td><td>56</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>56</td><td>0</td><td>45</td></tr><tr><td>119548</td><td>51087</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>57</td><td>0</td><td>44</td></tr><tr><td>125256</td><td>53429</td><td>58</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>58</td><td>0</td><td>43</td></tr><tr><td>131093</td><td>55857</td><td>59</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>59</td><td>0</td><td>42</td></tr><tr><td>137067</td><td>58367</td><td>0</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>60</td><td>0</td><td>41</td></tr><tr><td>143536</td><td>61018</td><td>61</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>61</td><td>0</td><td>40</td></tr><tr><td>149923</td><td>63670</td><td>62</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>62</td><td>0</td><td>39</td></tr><tr><td>156440</td><td>66404</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>63</td><td>0</td><td>38</td></tr><tr><td>163245</td><td>69188</td><td>64</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>64</td><td>0</td><td>37</td></tr><tr><td>170139</td><td>72072</td><td>0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>65</td><td>0</td><td>36</td></tr><tr><td>177455</td><td>75063</td><td>66</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>66</td><td>0</td><td>35</td></tr><tr><td>184805</td><td>78107</td><td>67</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>67</td><td>0</td><td>34</td></tr><tr><td>192350</td><td>81229</td><td>68</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>68</td><td>0</td><td>33</td></tr><tr><td>200034</td><td>84439</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>69</td><td>0</td><td>32</td></tr><tr><td>207975</td><td>87709</td><td>0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>70</td><td>0</td><td>31</td></tr><tr><td>216319</td><td>91115</td><td>71</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>71</td><td>0</td><td>30</td></tr><tr><td>224630</td><td>94581</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>72</td><td>0</td><td>29</td></tr><tr><td>233269</td><td>98104</td><td>73</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>73</td><td>0</td><td>28</td></tr><tr><td>242067</td><td>101734</td><td>74</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>74</td><td>0</td><td>27</td></tr><tr><td>251027</td><td>105462</td><td>0</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>75</td><td>0</td><td>26</td></tr><tr><td>260597</td><td>109362</td><td>76</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>76</td><td>0</td><td>25</td></tr><tr><td>270065</td><td>113264</td><td>77</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>77</td><td>0</td><td>24</td></tr><tr><td>279688</td><td>117264</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>78</td><td>0</td><td>23</td></tr><tr><td>289664</td><td>121325</td><td>79</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>79</td><td>0</td><td>22</td></tr><tr><td>299744</td><td>125507</td><td>0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>80</td><td>0</td><td>21</td></tr><tr><td>310336</td><td>129817</td><td>81</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>81</td><td>0</td><td>20</td></tr><tr><td>320967</td><td>134191</td><td>82</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>82</td><td>0</td><td>19</td></tr><tr><td>331833</td><td>138659</td><td>83</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>83</td><td>0</td><td>18</td></tr><tr><td>342863</td><td>143231</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>84</td><td>0</td><td>17</td></tr><tr><td>354200</td><td>147874</td><td>0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>85</td><td>0</td><td>16</td></tr><tr><td>366020</td><td>152679</td><td>86</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>86</td><td>0</td><td>15</td></tr><tr><td>377797</td><td>157555</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>87</td><td>0</td><td>14</td></tr><tr><td>389967</td><td>162499</td><td>88</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>88</td><td>0</td><td>13</td></tr><tr><td>402326</td><td>167571</td><td>89</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>89</td><td>0</td><td>12</td></tr><tr><td>414872</td><td>172757</td><td>0</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>90</td><td>0</td><td>11</td></tr><tr><td>428143</td><td>178146</td><td>91</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>91</td><td>0</td><td>10</td></tr><tr><td>441292</td><td>183538</td><td>92</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>92</td><td>0</td><td>9</td></tr><tr><td>454621</td><td>189044</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>93</td><td>0</td><td>8</td></tr><tr><td>468368</td><td>194622</td><td>94</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>94</td><td>0</td><td>7</td></tr><tr><td>482234</td><td>200342</td><td>0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>95</td><td>0</td><td>6</td></tr><tr><td>496702</td><td>206211</td><td>96</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>96</td><td>0</td><td>5</td></tr><tr><td>511214</td><td>212155</td><td>97</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>97</td><td>0</td><td>4</td></tr><tr><td>526001</td><td>218209</td><td>98</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>98</td><td>0</td><td>3</td></tr><tr><td>540977</td><td>224383</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>99</td><td>0</td><td>2</td></tr><tr><td>556310</td><td>230639</td><td>0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>100</td><td>0</td><td>1</td></tr></tbody></table>

