/* 
1.
请求地址 https://autumnfish.cn/search
请求方法 get
请求参数 keywords(查询关键字)
响应内容 歌曲搜索结果

1.点击回车
2.查询数据
3.渲染数据


*/
/* 
2.
请求地址 https://autumnfish.cn/song/url
请求方法 get
请求参数 id(歌曲id)
响应内容 歌曲url地址

1.点击播放(v-on 自定义参数)
2.歌曲地址获取(接口 歌曲id)
3.歌曲地址设置


*/

/* 
3.
请求地址 https://autumnfish.cn/song/detail
请求方法 get
请求参数 ids(歌曲id)
响应内容 歌曲详情,包含封面信息

1.点击播放(增加逻辑)
2.歌曲封面获取(接口 歌曲id)
3.歌曲封面设置(v-bind)


*/
/* 
4.
请求地址 https://autumnfish.cn/comment/hot?type=0
请求方法 get
请求参数 id(歌曲id,type固定为0)
响应内容 歌曲的热门评论

1.点击播放(增加逻辑)
2.歌曲封面获取(接口 歌曲id)
3.歌曲封面设置(v-bind)


*/
/* 
5
监听音乐播放(v-on play)
监听音乐暂停(v-on pause)
操纵类名(v-bind 对象)

*/
/* 
6.v-if
请求地址 https://autumnfish.cn/mv/url
请求方法 get
请求参数 id(mvid,为0说明没有mv)
响应内容 mv的地址

mv图标显示(v-if)
mv地址获取(接口 mvid)
遮罩层(v-show, v-on)
mv地址设置(v-bind)

*/
var app = new Vue({
    el: '#player',
    data: {
        query: '',
        musicList: [],
        musicUrl: '',
        musicCover: '',
        hotComments: [],
        isPlaying: false,
        isShow: false,
        mvUrl: ''
    },
    methods: {
        searchMusic: function() {
            // 调用接口
            //保存this

            var that = this;
            axios
                .get('https://autumnfish.cn/search?keywords=' + this.query)
                .then(
                    function(response) {
                        console.log(response.data.result.songs);
                        that.musicList = response.data.result.songs;
                    },
                    function(err) {}
                );
        },

        playMusic: function(musicId) {
            // 调用接口
            //保存this

            var that = this;
            //获取歌曲地址
            axios.get('https://autumnfish.cn/song/url?id=' + musicId).then(
                function(response) {
                    console.log(response);
                    that.musicUrl = response.data.data[0].url;
                },
                function(err) {}
            );
            //获取歌曲详情
            axios.get('https://autumnfish.cn/song/detail?ids=' + musicId).then(
                function(response) {
                    console.log(response.data.songs[0].al.picUrl);
                    that.musicCover = response.data.songs[0].al.picUrl;
                },
                function(err) {}
            );
            //获取歌曲评论
            axios
                .get('https://autumnfish.cn/comment/hot?type=0&id=' + musicId)
                .then(
                    function(response) {
                        console.log(response);
                        that.hotComments = response.data.hotComments;
                    },
                    function(err) {}
                );
        },
        play: function() {
            console.log('play');
            this.isPlaying = true;
        },
        pause: function() {
            console.log('pause');
            this.isPlaying = false;
        },
        //播放mv
        playMv: function(mvId) {
            var that = this;
            axios.get('https://autumnfish.cn/mv/url?id=' + mvId).then(
                function(response) {
                    console.log(response);
                    that.isShow = true;
                    that.mvUrl = response.data.data.url;
                },
                function(err) {}
            );
        },
        hide: function() {
            this.isShow =false
        }
    }
});
