import { Router } from 'https://deno.land/x/oak@v6.3.1/mod.ts';

import { classWodControll } from '../controllers/class-wod.ts'

import { usersControll } from '../controllers/users.ts'
import { schedualeTrainingDateControll } from '../controllers/scheduale-training-date.ts'

const router = new Router();





router.get('/classWod', classWodControll.getAll);

router.get('/classWod/:classWodId', classWodControll.getClassWodById);

router.post('/classWod', classWodControll.create);

router.patch('/classWod/:classWodId', classWodControll.update);

router.delete('/classWod/:classWodId', classWodControll.delete);


router.get('/scheduale', schedualeTrainingDateControll.getAll);

router.get('/scheduale/:schedualeTrainingDateId', schedualeTrainingDateControll.getSchedualeTrainingDateById);

router.post('/scheduale', schedualeTrainingDateControll.create);

router.patch('/scheduale/:schedualeTrainingDateId', schedualeTrainingDateControll.update);

router.delete('/scheduale/:schedualeTrainingDateId', schedualeTrainingDateControll.delete);





router.get('/user/:userId', usersControll.getUser);

router.get('/user', usersControll.getAll);

router.post('/user', usersControll.addUser);

router.patch('/user/:userId', usersControll.updateUser);

router.delete('/user/:userId', usersControll.deleteUser);

export default router;