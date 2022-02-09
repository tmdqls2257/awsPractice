type Tweet = {
  id: string // 트윗 아이디
  text: string // 트윗 텍스트
  createdAt: Date // 트윗 생성 날짜
  name: string // 사용자 이름
  username: string // 사용자 닉네임 (아이디)
  url?: string // 사용자 프로파일 사진 URL
}

const tweets: Tweet[] = [
  {
    id: '1',
    text: '안녕하세요',
    createdAt: new Date(),
    name: 'tmdqls2257',
    username: 'red',
  },
  {
    id: '2',
    text: '잘가요',
    createdAt: new Date(),
    name: 'tmdqls3344',
    username: 'been',
  },
]
// 모든 트윗을 가져오는 함수
export async function getAll(): Promise<Tweet[]> {
  return tweets
}
