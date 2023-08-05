      <div className="flex gap-2">
        <Button
          type="button"
          onClick={() => append({ school_name: "", school_location: "", major: "", start_date: "", end_date: "" })}
        >
          Add Education
        </Button>
        <Button type="button" onClick={() => remove(fields.length - 1)}>
          Remove Education
        </Button>
      </div>
