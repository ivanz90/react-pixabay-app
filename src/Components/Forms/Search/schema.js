const schema = {
  inputs: [
    {
      id: 1,
      name: 'q',
      type: 'text',
      element: 'text-input',
      validators: {}
    },
    {
      id: 2,
      name: 'image_type',
      title: '',
      element: 'select',
      options: [
        { value: 'all', label: 'All' },
        { value: 'photo', label: 'Photo' },
        { value: 'illustration', label: 'Illustration' },
        { value: 'vector', label: 'Vector' }
      ],
      validators: {}
    },
    {
      id: 3,
      name: 'category',
      title: '',
      element: 'radio',
      options: [
        { id: 1, value: 'backgrounds', label: 'backgrounds' },
        { id: 2, value: 'fashion', label: 'fashion' },
        { id: 3, value: 'nature', label: 'nature' },
        { id: 4, value: 'science', label: 'science' },
        { id: 5, value: 'education', label: 'education' },
        { id: 6, value: 'feelings', label: 'feelings' },
        { id: 7, value: 'health', label: 'health' },
        { id: 9, value: 'people', label: 'people' },
        { id: 10, value: 'religion', label: 'religion' },
        { id: 11, value: 'places', label: 'places' },
        { id: 12, value: 'animals', label: 'animals' },
        { id: 14, value: 'industry', label: 'industry' },
        { id: 15, value: 'computer', label: 'computer' },
        { id: 16, value: 'food', label: 'food' },
        { id: 17, value: 'sports', label: 'sports' },
        { id: 18, value: 'transportation', label: 'transportation' },
        { id: 19, value: 'travel', label: 'travel' },
        { id: 20, value: 'buildings', label: 'buildings' },
        { id: 21, value: 'business', label: 'business' },
        { id: 22, value: 'music', label: 'music' }
      ],
      validators: {}
    }
  ],
  buttons: [
    {
      id: 1,
      type: 'submit',
      code: 'submit',
      title: 'Search'
    }
  ]
}

export default schema