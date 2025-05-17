export const PATH = {
  BROWSE: {
    MOVIE: '/browse/movie', //영화
    TV: '/browse/tv', //티비
    FAVORITE: '/browse/favorite', // TMDB API -> ACCOUNT -> Favorite Movies/TV
    PEOPLE: '/browse/people', //인물
  },
  CONTENT: {
    DETAIL: '/content/:movieId', // 영화 상세 페이지
    CREDITS: '/content/:movieId/credits', // 출연/제작 더보기 페이지
    WATCH: '/watch/:videoId', // 비디오 재생 페이지
  },
  // 실제 로그인 안하고 다른 방식으로 간단하게만 구현예정
  AUTH: {
    LOGIN: '/login',
    SIGNUP: '/signup',
  },
  SEARCH: 'search',
};
