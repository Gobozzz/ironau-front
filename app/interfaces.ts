interface IGlobalSearchItem {
  id: number;
  title: string;
  slug: string;
  type: string;
}

interface ServerErrors {
  [key: string]: string[];
}

interface Interesting {
  content: string;
}

interface NewsCategory {
  id: number;
  slug: string;
  title: string;
}

interface NewsCard {
  categories: NewsCategory[];
  date: string;
  description: string;
  id: number;
  slug: string;
  title: string;
  user: { id: number; email: string; name: string };
}

interface LevelLearning {
  id: number;
  title: string;
  slug: string;
}

interface CreatedLessonCard {
  id: number;
  title: string;
  slug: string;
  only_course: boolean;
  time_to_complete: number;
  content: string;
  image: string;
  level: LevelLearning;
  rating: number;
  count_enrolled: number;
  status: string;
  status_name: string;
}

interface CreatedCourseCard {
  id: number;
  title: string;
  slug: string;
  content: string;
  image: string;
  level: LevelLearning;
  rating: number;
  count_enrolled: number;
  count_lessons: number;
  author: Author;
  status: string;
  status_name: string;
}

interface LessonCard {
  id: number;
  title: string;
  slug: string;
  time_to_complete: number;
  content: string;
  image: string | null;
  level: LevelLearning;
  rating: number;
  count_enrolled: number;
  author: Author;
  is_enrolled: boolean;
}

interface CourseCard {
  id: number;
  title: string;
  slug: string;
  content: string;
  image: string;
  level: LevelLearning;
  rating: number;
  count_enrolled: number;
  count_lessons: number;
  progress_percent: number | null;
  author: Author;
  is_enrolled: boolean;
}

interface Author {
  id: number;
  name: string;
  email: string;
}

interface LearningLevels {
  id: number;
  slug: string;
  title: string;
}

interface EditLesson {
  title: string;
  time_to_complete: number | null;
  level_id: number | null;
  content: string;
  image: string | null;
  image_url: string | null;
  only_course: boolean;
}

interface EditExercise {
  order: number;
  type: number;
  title: string;
  description: string | null;
  content: any;
  id?: number;
  tempId?: string;
}

interface EditCourse {
  title: string;
  level_id: number | null;
  content: string;
  image: string | null;
  image_url: string | null;
  lessons: number[];
}

interface UpdateEmptyVariantExercise {
  index: number;
  title: string;
  variants: string[];
}

interface UpdateTextVariantExercise {
  index: number;
  title: string;
}

interface PaginatePageInterface {
  label: string;
  page: number | null;
  active: boolean;
}

interface SelectedLessonRedactor {
  id: number;
  title: string;
}

interface UpdateLessonsInCourseInterface {
  id: number;
  title: string;
  content: string;
  image: string;
  level_id: number | null;
  lessons: SelectedLessonRedactor[];
}

interface LearningFilters {
  title_f: string;
  level_f: number[];
}

interface LessonFlow {
  can_rating: boolean;
  lesson: { id: number; title: string; slug: string };
  exercises: ExerciseFlowAsideInteraface[];
}

interface CourseFlow {
  can_rating: boolean;
  course: { id: number; title: string; slug: string };
  lessons: {
    id: number;
    title: string;
    exercises: ExerciseFlowAsideInteraface[];
  }[];
  progress: number;
}

interface ExerciseFlowAsideInteraface {
  id: number;
  title: string;
  type: number;
  is_completed: boolean;
}

interface ExerciseFlow {
  answer: any;
  content: any;
  description: string | null;
  id: number;
  is_complete: boolean;
  title: string;
  type: number;
}
