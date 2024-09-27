import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Lottie from 'react-lottie-player'
import lottiejson from '/public/mainpage.json'
import styles from './mainpage.module.css'
import {useRouter} from 'next/router';

export default function Mainpage() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/projects');
  };
  return (
    <div className={styles.wrapper}>
      <Grid container spacing={10}>
        <Grid size={5}>
          <div className={styles.introduce}>
            <h2 style={{fontSize:'45px'}}>안녕하세요!</h2>
            <p>안녕하세요, 제 이름은 조성빈입니다. 저는 충주에서 태어나 만17세이며, 현재 충주상업고등학교2학년 재학중입니다. 저는 어렸을 때부터 농구를 하여 활동량과 체력이 많고, 판단력이 뛰어납니다.</p>
            <Button variant="contained" onClick={handleClick}>프로젝트 보러가기</Button>
          </div>
        </Grid>
        <Grid size={7}>
          <div>
            <Lottie
              loop
              animationData={lottiejson}
              play
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
